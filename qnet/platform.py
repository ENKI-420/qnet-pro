from __future__ import annotations
import uuid, time
from datetime import datetime
from typing import Dict
import bcrypt

from .db import get_card, insert_txn, insert_revenue, update_balance
from .cellular import CellularNetworkInterface

class QuantumSecurityEngine:
    # Mock shim that *wraps* real crypto primitives in CryptoEngine at edges (omitted for brevity here)
    def __init__(self):
        self.version = "mock-quantum-v1"

class QuantumDebitCard:
    def __init__(self, card_row: Dict):
        self.card_id = card_row["card_id"]
        self.holder_name = card_row["holder_name"]
        self.last4 = card_row["last4"]
        self.token = card_row["token"]
        self.balance = float(card_row["balance"])
        self.status = card_row["status"]
        self.pin_bcrypt = card_row["pin_bcrypt"]
        self.daily_limit = 5000.0
        self.daily_spent = 0.0
        self.last_reset_date = datetime.utcnow().date()
        self.quantum_engine = QuantumSecurityEngine()

    def reset_daily_limit(self):
        if datetime.utcnow().date() > self.last_reset_date:
            self.daily_spent = 0.0
            self.last_reset_date = datetime.utcnow().date()

    def verify_pin(self, pin: str) -> bool:
        return bcrypt.checkpw(pin.encode(), self.pin_bcrypt.encode())

    def check_transaction_limits(self, amount: float) -> Dict:
        self.reset_daily_limit()
        if self.status != "ACTIVE":
            return {"valid": False, "reason": "Card is not active"}
        if amount > self.balance:
            return {"valid": False, "reason": "Insufficient funds"}
        if amount > 1000:
            return {"valid": False, "reason": "Single transaction limit exceeded"}
        if self.daily_spent + amount > self.daily_limit:
            return {"valid": False, "reason": "Daily limit exceeded"}
        return {"valid": True}

    def process_transaction(self, amount: float, merchant: str, pin: str) -> Dict:
        if not self.verify_pin(pin):
            return {"status": "DECLINED", "reason": "Invalid PIN", "transaction_id": None}
        limit = self.check_transaction_limits(amount)
        if not limit["valid"]:
            return {"status": "DECLINED", "reason": limit["reason"], "transaction_id": None}

        txn_id = str(uuid.uuid4())
        self.balance -= amount
        self.daily_spent += amount
        return {"status": "APPROVED", "transaction_id": txn_id, "amount": amount, "remaining_balance": self.balance, "quantum_secured": True}

class QNetFinancialPlatform:
    def __init__(self):
        self.merchants = {
            "Amazon": {"category": "E-commerce", "fee_rate": 0.029},
            "Walmart": {"category": "Retail", "fee_rate": 0.025},
            "Starbucks": {"category": "Food & Beverage", "fee_rate": 0.032},
            "Shell": {"category": "Gas Station", "fee_rate": 0.028},
            "McDonald's": {"category": "Fast Food", "fee_rate": 0.031},
            "Target": {"category": "Retail", "fee_rate": 0.026},
            "Uber": {"category": "Transportation", "fee_rate": 0.035},
            "Netflix": {"category": "Subscription", "fee_rate": 0.030}
        }
        self.cellular_network = CellularNetworkInterface()
        self.transaction_volume = 0.0
        self.revenue = {"transaction_fees": 0.0, "monthly_fees": 0.0, "interchange_fees": 0.0, "atm_fees": 0.0}

    def issue_card_from_db(self, card_id: str) -> QuantumDebitCard | None:
        row = get_card(card_id)
        if not row: return None
        return QuantumDebitCard(row)

    def process_quantum_transaction(self, card_id: str, amount: float, merchant: str, pin: str):
        card = self.issue_card_from_db(card_id)
        if not card:
            return {"status": "ERROR", "message": "Card not found"}
        net = self.cellular_network.get_network_status()
        if net["status"] != "CONNECTED":
            return {"status": "ERROR", "message": "Network unavailable"}
        result = card.process_transaction(amount, merchant, pin)
        if result["status"] != "APPROVED":
            return result
        conf = self.cellular_network.transmit_transaction({"transaction_id": result["transaction_id"], "amount": amount, "merchant": merchant})

        rate = self.merchants.get(merchant, {}).get("fee_rate", 0.03)
        txn_fee = amount * rate
        interchange = amount * 0.015
        fees = txn_fee + interchange
        self.revenue["transaction_fees"] += txn_fee
        self.revenue["interchange_fees"] += interchange
        self.transaction_volume += amount
        update_balance(card.card_id, card.balance)
        insert_txn({
            "transaction_id": result["transaction_id"],
            "card_id": card.card_id,
            "amount": amount,
            "merchant": merchant,
            "timestamp": datetime.utcnow().isoformat(),
            "status": "COMPLETED",
            "network_confirmation": conf["confirmation_id"],
            "fees_generated": fees
        })
        insert_revenue("transaction_fee", txn_fee, f"Transaction fee for {merchant}")
        insert_revenue("interchange_fee", interchange, "Interchange fee")
        return {**result, "network_confirmation": conf["confirmation_id"], "transmission_time": conf["transmission_time"], "fees_generated": fees}

    def analytics(self):
        total_rev = sum(self.revenue.values())
        return {
            "active_cards": None,  # fill via query in server if desired
            "transaction_volume": self.transaction_volume,
            "total_revenue": total_rev,
            "revenue_breakdown": self.revenue,
            "projections": {"monthly": total_rev*30, "annual": total_rev*365}
        }
