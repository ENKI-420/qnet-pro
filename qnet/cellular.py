import time, uuid, random

class CellularNetworkInterface:
    def get_network_status(self):
        return {
            "status": "CONNECTED",
            "signal_strength": random.randint(70, 100),
            "connection_type": "5G",
            "operator": "DemoNet",
            "latency_ms": random.randint(20, 60),
            "data_usage_mb": random.random()*5
        }

    def transmit_transaction(self, payload: dict):
        time.sleep(random.uniform(0.02, 0.12))
        return {"status": "SUCCESS", "confirmation_id": str(uuid.uuid4()), "transmission_time": random.uniform(0.02, 0.12)}
