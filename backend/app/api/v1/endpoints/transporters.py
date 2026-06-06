"""Transporter endpoints"""
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db_session

router = APIRouter()


@router.get("/")
async def list_transporters(db: AsyncSession = Depends(get_db_session)):
    """List all transporters"""
    return {"message": "Not implemented yet"}


@router.post("/")
async def create_transporter(db: AsyncSession = Depends(get_db_session)):
    """Create a new transporter"""
    return {"message": "Not implemented yet"}


@router.get("/{transporter_id}")
async def get_transporter(transporter_id: str, db: AsyncSession = Depends(get_db_session)):
    """Get transporter by ID"""
    return {"message": "Not implemented yet"}
