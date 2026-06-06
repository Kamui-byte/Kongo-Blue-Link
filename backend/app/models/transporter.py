"""Transporter (Transporteur) model"""
from sqlalchemy import Column, String, Float, Integer, DateTime, ForeignKey, JSON
from sqlalchemy.orm import relationship
from datetime import datetime

from app.core.database import Base


class Transporter(Base):
    """Transporter (Transporteur) model"""
    __tablename__ = "transporters"

    id = Column(String, primary_key=True, index=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=False, unique=True)
    company_name = Column(String, nullable=False)
    vehicle_types = Column(JSON, default=[])
    capacity = Column(Float, nullable=False)
    location = Column(String, nullable=False)
    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)
    average_rating = Column(Float, default=0.0)
    total_completed_transports = Column(Integer, default=0)
    price_per_km = Column(Float, nullable=True)
    verification_status = Column(String, default="PENDING")
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    # Relationships
    user = relationship("User", back_populates="transporter")
    offers = relationship("Offer", back_populates="transporter")

    def __repr__(self) -> str:
        return f"<Transporter {self.company_name}>"
