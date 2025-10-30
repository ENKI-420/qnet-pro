from __future__ import annotations
import sqlite3, os, uuid, json, time
from dataclasses import dataclass
from pathlib import Path
from typing import Optional, Dict

DB_PATH = Path(os.getenv("QNET_DB", "/mnt/data/qnet_financial.db"))

SCHEMA = [
    """CREATE TABLE IF NOT EXISTS cards (
        card_id TEXT PRIMARY KEY,
        last4 TEXT NOT NULL,
        token TEXT NOT NULL,
        holder_name TEXT NOT NULL,
        pin_bcrypt TEXT NOT NULL,
        balance REAL NOT NULL,
        status TEXT NOT NULL,
        created_at TEXT NOT NULL
    );""" ,
    """CREATE TABLE IF NOT EXISTS transactions (
        transaction_id TEXT PRIMARY KEY,
        card_id TEXT NOT NULL,
        amount REAL NOT NULL,
        merchant TEXT NOT NULL,
        timestamp TEXT NOT NULL,
        status TEXT NOT NULL,
        network_confirmation TEXT,
        fees_generated REAL DEFAULT 0
    );""" ,
    """CREATE TABLE IF NOT EXISTS revenue (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        revenue_type TEXT NOT NULL,
        amount REAL NOT NULL,
        timestamp TEXT NOT NULL,
        description TEXT
    );"""
]

def get_conn():
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    return sqlite3.connect(DB_PATH)

def init_db():
    conn = get_conn()
    cur = conn.cursor()
    for s in SCHEMA:
        cur.execute(s)
    conn.commit()
    conn.close()

@dataclass
class CardRow:
    card_id: str
    last4: str
    token: str
    holder_name: str
    pin_bcrypt: str
    balance: float
    status: str
    created_at: str

def insert_card(row: CardRow):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("""INSERT INTO cards (card_id, last4, token, holder_name, pin_bcrypt, balance, status, created_at)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
                (row.card_id, row.last4, row.token, row.holder_name, row.pin_bcrypt, row.balance, row.status, row.created_at))
    conn.commit()
    conn.close()

def get_card(card_id: str) -> Optional[Dict]:
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT card_id,last4,token,holder_name,pin_bcrypt,balance,status,created_at FROM cards WHERE card_id=?", (card_id,))
    row = cur.fetchone()
    conn.close()
    if not row: return None
    keys = ["card_id","last4","token","holder_name","pin_bcrypt","balance","status","created_at"]
    return dict(zip(keys,row))

def update_balance(card_id: str, new_balance: float):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("UPDATE cards SET balance=? WHERE card_id=?", (new_balance, card_id))
    conn.commit()
    conn.close()

def insert_txn(txn: Dict):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("""INSERT INTO transactions (transaction_id, card_id, amount, merchant, timestamp, status, network_confirmation, fees_generated)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?)""" ,
                (txn["transaction_id"], txn["card_id"], txn["amount"], txn["merchant"],
                 txn["timestamp"], txn["status"], txn.get("network_confirmation"), txn.get("fees_generated",0)))
    conn.commit()
    conn.close()

def insert_revenue(rev_type: str, amount: float, description: str):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("""INSERT INTO revenue (revenue_type, amount, timestamp, description)
                  VALUES (?, ?, datetime('now'), ?)""", (rev_type, amount, description))
    conn.commit()
    conn.close()

if __name__ == '__main__':
    import bcrypt
    init_db()
    # seed demo cards
    import datetime as dt
    for name, bal, pin in [("Alice Johnson", 5000.0, "1234"), ("Bob Smith", 3500.0, "2468")]:
        card_id = str(uuid.uuid4())
        token = str(uuid.uuid4())
        last4 = f"{random.randint(0,9999):04d}"
        pin_bcrypt = bcrypt.hashpw(pin.encode(), bcrypt.gensalt()).decode()
        row = CardRow(card_id, last4, token, name, pin_bcrypt, bal, "ACTIVE", dt.datetime.utcnow().isoformat())
        insert_card(row)
    print(f"DB initialized at {DB_PATH}")
