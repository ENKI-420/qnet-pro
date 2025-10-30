from fastapi import FastAPI, Header, HTTPException, Path, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List, Any, Dict
from datetime import datetime

API_KEY = "YOUR_KEY"

app = FastAPI(title="DNA-Lang Interpreter Service — Actions Minimal")

# CORS middleware for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://*.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def require_api_key(x_api_key: Optional[str]):
    if x_api_key != API_KEY:
        raise HTTPException(status_code=403, detail="Forbidden")

class GeneInvokeRequest(BaseModel):
    gene: str
    args: Dict[str, Any] = {}
    dryRun: bool = False
    withAutoEnhance: bool = True

class MutationRequest(BaseModel):
    type: str
    instruction: str
    rationale: Optional[str] = None

class PatchOp(BaseModel):
    op: str
    path: str
    value: Optional[Any] = None

class PatchWrapper(BaseModel):
    patch: List[PatchOp]

@app.get("/api/health")
def health():
    return {"status": "ok", "version": "1.3.1-actions"}

@app.post("/api/parse")
def parse(body: Dict[str, str]):
    src = body.get("source", "")
    return {"valid": bool(src.strip()), "organismName": "Auto", "errors": []}

@app.post("/api/organisms/{id}/run")
def invoke_gene(id: str, body: GeneInvokeRequest, x_api_key: Optional[str] = Header(None, convert_underscores=False), idempotency_key: Optional[str] = Header(None, alias="Idempotency-Key")):
    require_api_key(x_api_key)
    now = datetime.utcnow().isoformat() + "Z"
    return {"runId": "run-"+now.replace(":", "").replace(".", ""), "success": True, "returned": {"gene": body.gene, "args": body.args}, "status": "completed", "startedAt": now, "finishedAt": now, "logs": [{"ts": now, "level": "INFO", "message": f"Ran {body.gene}"}]}

@app.post("/api/organisms/{id}/mutations")
def submit_mutation(id: str, body: MutationRequest, x_api_key: Optional[str] = Header(None, convert_underscores=False), idempotency_key: Optional[str] = Header(None, alias="Idempotency-Key")):
    require_api_key(x_api_key)
    return {"accepted": True, "notes": f"Applied {body.type}: {body.instruction}"}

@app.get("/api/organisms/{id}/state")
def get_state(id: str, x_api_key: Optional[str] = Header(None, convert_underscores=False)):
    require_api_key(x_api_key)
    return {"fitness": 0.7, "consciousness": 0.4, "stability": 0.9, "transcendence": False, "variables": {}, "lastUpdated": datetime.utcnow().isoformat()+"Z"}

@app.patch("/api/organisms/{id}/state")
def patch_state(id: str, body: PatchWrapper, x_api_key: Optional[str] = Header(None, convert_underscores=False), idempotency_key: Optional[str] = Header(None, alias="Idempotency-Key")):
    require_api_key(x_api_key)
    return {"fitness": 0.82, "consciousness": 0.4, "stability": 0.9, "transcendence": False, "variables": {"override": True}, "lastUpdated": datetime.utcnow().isoformat()+"Z"}

@app.get("/api/organisms/{id}/runs")
def list_runs_for_organism(id: str, page: int = Query(1, ge=1), pageSize: int = Query(50, ge=1, le=200), x_api_key: Optional[str] = Header(None, convert_underscores=False)):
    require_api_key(x_api_key)
    now = datetime.utcnow().isoformat()+"Z"
    return [{"runId":"run-1","organismId":id,"kind":"gene","target":"inc","status":"completed","startedAt":now,"finishedAt":now}]
