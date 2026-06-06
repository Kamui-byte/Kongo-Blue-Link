"""Offer endpoints"""
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db_session

router = APIRouter()


@router.get("/")
async def list_offers(db: AsyncSession = Depends(get_db_session)):
    """List all offers"""
    return {"message": "Not implemented yet"}


@router.post("/")
async def create_offer(db: AsyncSession = Depends(get_db_session)):
    """Create a new offer"""
    return {"message": "Not implemented yet"}


@router.get("/{offer_id}")
async def get_offer(offer_id: str, db: AsyncSession = Depends(get_db_session)):
    """Get offer by ID"""
    return {"message": "Not implemented yet"}
