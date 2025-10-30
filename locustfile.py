from locust import HttpUser, task, between
import uuid, random

class QNetUser(HttpUser):
    wait_time = between(0.5, 2.0)
    card_id = None

    def on_start(self):
        self.client.post("/seed")
        # issue card
        r = self.client.post("/issue", json={"holder_name":"PerfUser","initial_balance":5000.0})
        if r.ok:
            self.card_id = r.json().get("card_id")

    @task(5)
    def small_txn(self):
        if not self.card_id: return
        amt = random.uniform(5.0, 50.0)
        self.client.post("/txn", json={"card_id": self.card_id, "amount": amt, "merchant":"Starbucks", "pin":"1234"})

    @task(1)
    def analytics(self):
        self.client.get("/analytics")
