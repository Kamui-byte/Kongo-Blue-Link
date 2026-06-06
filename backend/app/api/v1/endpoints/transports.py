"""Transport endpoints"""
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db_session

router = APIRouter()


@router.get("/")
async def list_transports(db: AsyncSession = Depends(get_db_session)):
    """List all transports"""
    return {"message": "Not implemented yet"}


@router.post("/")
async def create_transport(db: AsyncSession = Depends(get_db_session)):
    """Create a new transport request"""
    return {"message": "Not implemented yet"}


@router.get("/{transport_id}")
async def get_transport(transport_id: str, db: AsyncSession = Depends(get_db_session)):
    """Get transport by ID"""
    return {"message": "Not implemented yet"}
