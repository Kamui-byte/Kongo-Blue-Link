"""Transport (Demande de transport) model"""
from sqlalchemy import Column, String, Float, DateTime, ForeignKey, Enum
from sqlalchemy.orm import relationship
from datetime import datetime
import enum

from app.core.database import Base


class TransportStatus(str, enum.Enum):
    """Transport status enumeration"""
    OPEN = "OPEN"
    MATCHED = "MATCHED"
    COMPLETED = "COMPLETED"
    CANCELLED = "CANCELLED"


class Transport(Base):
    """Transport (Demande de transport) model"""
    __tablename__ = "transports"

    id = Column(String, primary_key=True, index=True)
    loader_id = Column(String, ForeignKey("loaders.id"), nullable=False)
    origin_location = Column(String, nullable=False)
    origin_latitude = Column(Float, nullable=True)
    origin_longitude = Column(Float, nullable=True)
    destination_location = Column(String, nullable=False)
    destination_latitude = Column(Float, nullable=True)
    destination_longitude = Column(Float, nullable=True)
    cargo_type = Column(String, nullable=False)
    weight = Column(Float, nullable=False)
    volume = Column(Float, nullable=True)
    budget_min = Column(Float, nullable=True)
    budget_max = Column(Float, nullable=True)
    required_date = Column(DateTime, nullable=False)
    status = Column(Enum(TransportStatus), default=TransportStatus.OPEN)
    description = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    # Relationships
    loader = relationship("Loader", back_populates="transports")
    matches = relationship("Match", back_populates="transport")

    def __repr__(self) -> str:
        return f"<Transport {self.cargo_type} from {self.origin_location}>"
