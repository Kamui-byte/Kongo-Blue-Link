"""MicroHub model"""
from sqlalchemy import Column, String, Float, DateTime
from datetime import datetime

from app.core.database import Base


class MicroHub(Base):
    """MicroHub model"""
    __tablename__ = "microhubs"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    location = Column(String, nullable=False)
    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)
    capacity = Column(Float, nullable=False)
    manager = Column(String, nullable=True)
    status = Column(String, default="ACTIVE")
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    def __repr__(self) -> str:
        return f"<MicroHub {self.name}>"
