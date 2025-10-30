import pytest, json
from fastapi.testclient import TestClient
from qnet.server import app

client = TestClient(app)

def test_seed_and_issue_and_txn_flow():
    r = client.post("/seed")
    assert r.status_code == 200
    r = client.post("/issue", json={"holder_name":"Test User","initial_balance":1000.0})
    assert r.status_code == 200
    card_id = r.json()["card_id"]
    t = client.post("/txn", json={"card_id": card_id, "amount": 25.0, "merchant":"Starbucks", "pin":"1234"})
    assert t.status_code == 200
    a = client.get("/analytics")
    assert a.status_code == 200
    m = client.get("/metrics")
    assert m.status_code == 200
