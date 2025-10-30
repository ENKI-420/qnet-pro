from __future__ import annotations
import uuid, random, time, datetime as dt, bcrypt
from .db import init_db, insert_card, CardRow, insert_revenue
from .platform import QNetFinancialPlatform

def main():
    init_db()
    platform = QNetFinancialPlatform()
    # Seed two demo cards
    cards = []
    for name, bal, pin in [("Alice Johnson", 5000.0, "1234"), ("Bob Smith", 3500.0, "2468")]:
        card_id = str(uuid.uuid4())
        token = str(uuid.uuid4())
        last4 = f"{random.randint(0,9999):04d}"
        pin_bcrypt = bcrypt.hashpw(pin.encode(), bcrypt.gensalt()).decode()
        insert_card(CardRow(card_id, last4, token, name, pin_bcrypt, bal, "ACTIVE", dt.datetime.utcnow().isoformat()))
        insert_revenue("monthly_fee", 12.99, f"Monthly fee for card ...{last4}")
        cards.append({"card_id": card_id, "name": name, "pin": pin})

    print("🚀 QNET DEMO — processing transactions")
    txs = [
        (0, 45.67, "Starbucks"),
        (1, 123.45, "Amazon"),
        (0, 234.56, "Walmart"),
        (1, 67.89, "Shell"),
    ]
    for idx, amt, m in txs:
        c = cards[idx]
        res = platform.process_quantum_transaction(c["card_id"], amt, m, c["pin"])
        if res["status"] == "APPROVED":
            print(f"✅ {c['name']} ${amt:.2f} at {m} — balance ${res['remaining_balance']:.2f}")
        else:
            print(f"❌ DECLINED: {res.get('reason')}")
        time.sleep(0.2)

    print("📊 Analytics:", platform.analytics())

if __name__ == "__main__":
    main()
