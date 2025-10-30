from fastapi import FastAPI, HTTPException, Request
from prometheus_client import Counter, Histogram, generate_latest, CONTENT_TYPE_LATEST
from .models import IssueCardRequest, IssueCardResponse, TxnRequest, TxnResponse, Analytics
from .db import init_db, insert_card, CardRow, insert_revenue, get_conn
from .platform import QNetFinancialPlatform
import uuid, random, datetime as dt, bcrypt

app = FastAPI(title="QNet Demo API", version="0.1.0")
init_db()
platform = QNetFinancialPlatform()

REQ_COUNT = Counter("qnet_requests_total", "Total HTTP requests", ["path","method","status"])
REQ_LATENCY = Histogram("qnet_request_latency_seconds", "Request latency", ["path","method"])


@app.post("/seed", response_model=dict)
def seed(request: Request):
    import time
    start=time.time()
    # Seeds two demo cards
    for name, bal, pin in [("Alice Johnson", 5000.0, "1234"), ("Bob Smith", 3500.0, "2468")]:
        card_id = str(uuid.uuid4())
        token = str(uuid.uuid4())
        last4 = f"{random.randint(0,9999):04d}"
        pin_bcrypt = bcrypt.hashpw(pin.encode(), bcrypt.gensalt()).decode()
        row = CardRow(card_id, last4, token, name, pin_bcrypt, bal, "ACTIVE", dt.datetime.utcnow().isoformat())
        insert_card(row)
        insert_revenue("monthly_fee", 12.99, f"Monthly fee for card ...{last4}")
        REQ_COUNT.labels(path=request.url.path, method=request.method, status='200').inc()
    REQ_LATENCY.labels(path=request.url.path, method=request.method).observe(time.time()-start)
    return {"ok": True}

@app.post("/issue", response_model=IssueCardResponse)
def issue(req: IssueCardRequest, request: Request):
    import time
    start=time.time()
    card_id = str(uuid.uuid4())
    token = str(uuid.uuid4())
    last4 = f"{random.randint(0,9999):04d}"
    pin_bcrypt = bcrypt.hashpw("1234".encode(), bcrypt.gensalt()).decode()  # Demo only: ask user to set later
    row = CardRow(card_id, last4, token, req.holder_name, pin_bcrypt, req.initial_balance, "ACTIVE", dt.datetime.utcnow().isoformat())
    insert_card(row)
    insert_revenue("monthly_fee", 12.99, f"Monthly fee for card ...{last4}")
    return IssueCardResponse(card_id=card_id, last4=last4, token=token, holder_name=req.holder_name, initial_balance=req.initial_balance)

@app.post("/txn", response_model=TxnResponse)
def txn(req: TxnRequest, request: Request):
    import time
    start=time.time()
    result = platform.process_quantum_transaction(req.card_id, req.amount, req.merchant, req.pin)
    if result.get("status") == "ERROR":
        REQ_COUNT.labels(path=request.url.path, method=request.method, status='404').inc()
    REQ_LATENCY.labels(path=request.url.path, method=request.method).observe(time.time()-start)
    raise HTTPException(status_code=404, detail=result.get("message"))
    return result

@app.get("/analytics", response_model=Analytics)
def analytics(request: Request):
    import time
    start=time.time()
    # active cards count
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT COUNT(*) FROM cards")
    active = cur.fetchone()[0]
    conn.close()
    data = platform.analytics()
    data["active_cards"] = active
    return data


@app.get("/metrics")
def metrics():
    data = generate_latest()
    from fastapi.responses import Response
    return Response(content=data, media_type=CONTENT_TYPE_LATEST)
