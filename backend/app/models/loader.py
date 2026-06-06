"""Loader (Chargeur) model"""
from sqlalchemy import Column, String, Float, Integer, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

from app.core.database import Base


class Loader(Base):
    """Loader (Chargeur) model"""
    __tablename__ = "loaders"

    id = Column(String, primary_key=True, index=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=False, unique=True)
    company_name = Column(String, nullable=False)
    registration_number = Column(String, nullable=True)
    location = Column(String, nullable=False)
    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)
    average_rating = Column(Float, default=0.0)
    total_transports = Column(Integer, default=0)
    verification_status = Column(String, default="PENDING")
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    # Relationships
    user = relationship("User", back_populates="loader")
    transports = relationship("Transport", back_populates="loader")

    def __repr__(self) -> str:
        return f"<Loader {self.company_name}>"
