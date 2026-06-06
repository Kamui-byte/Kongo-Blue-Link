"""Match model"""
from sqlalchemy import Column, String, Float, DateTime, ForeignKey, Enum
from sqlalchemy.orm import relationship
from datetime import datetime
import enum

from app.core.database import Base


class MatchStatus(str, enum.Enum):
    """Match status enumeration"""
    PROPOSED = "PROPOSED"
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    COMPLETED = "COMPLETED"
    CANCELLED = "CANCELLED"


class Match(Base):
    """Match model"""
    __tablename__ = "matches"

    id = Column(String, primary_key=True, index=True)
    transport_id = Column(String, ForeignKey("transports.id"), nullable=False)
    offer_id = Column(String, ForeignKey("offers.id"), nullable=False)
    match_score = Column(Float, default=0.0)
    status = Column(Enum(MatchStatus), default=MatchStatus.PROPOSED)
    proposed_price = Column(Float, nullable=True)
    accepted_price = Column(Float, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    # Relationships
    transport = relationship("Transport", back_populates="matches")
    offer = relationship("Offer", back_populates="matches")
    messages = relationship("Message", back_populates="match")
    transaction = relationship("Transaction", back_populates="match", uselist=False)

    def __repr__(self) -> str:
        return f"<Match {self.id} - {self.status}>"
