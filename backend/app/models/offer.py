"""Offer (Offre de transport) model"""
from sqlalchemy import Column, String, Float, DateTime, ForeignKey, Enum
from sqlalchemy.orm import relationship
from datetime import datetime
import enum

from app.core.database import Base


class OfferStatus(str, enum.Enum):
    """Offer status enumeration"""
    AVAILABLE = "AVAILABLE"
    MATCHED = "MATCHED"
    COMPLETED = "COMPLETED"
    CANCELLED = "CANCELLED"


class Offer(Base):
    """Offer (Offre de transport) model"""
    __tablename__ = "offers"

    id = Column(String, primary_key=True, index=True)
    transporter_id = Column(String, ForeignKey("transporters.id"), nullable=False)
    available_capacity = Column(Float, nullable=False)
    available_date = Column(DateTime, nullable=False)
    price_per_km = Column(Float, nullable=False)
    start_location = Column(String, nullable=False)
    start_latitude = Column(Float, nullable=True)
    start_longitude = Column(Float, nullable=True)
    end_location = Column(String, nullable=False)
    end_latitude = Column(Float, nullable=True)
    end_longitude = Column(Float, nullable=True)
    status = Column(Enum(OfferStatus), default=OfferStatus.AVAILABLE)
    description = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    # Relationships
    transporter = relationship("Transporter", back_populates="offers")
    matches = relationship("Match", back_populates="offer")

    def __repr__(self) -> str:
        return f"<Offer {self.id} by {self.transporter_id}>"
