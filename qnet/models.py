from pydantic import BaseModel, Field
from typing import Optional, Dict

class IssueCardRequest(BaseModel):
    holder_name: str
    initial_balance: float = Field(ge=0)

class IssueCardResponse(BaseModel):
    card_id: str
    last4: str
    token: str
    holder_name: str
    initial_balance: float
    status: str = "ACTIVE"

class TxnRequest(BaseModel):
    card_id: str
    amount: float
    merchant: str
    pin: str

class TxnResponse(BaseModel):
    status: str
    transaction_id: Optional[str] = None
    amount: Optional[float] = None
    remaining_balance: Optional[float] = None
    reason: Optional[str] = None
    quantum_secured: bool = True
    network_confirmation: Optional[str] = None
    transmission_time: Optional[float] = None
    fees_generated: Optional[float] = None

class Analytics(BaseModel):
    active_cards: int
    transaction_volume: float
    total_revenue: float
    revenue_breakdown: Dict[str, float]
    projections: Dict[str, float]
