"""Matching endpoints"""
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db_session

router = APIRouter()


@router.post("/find-matches")
async def find_matches(transport_id: str, db: AsyncSession = Depends(get_db_session)):
    """Find matching offers for a transport request"""
    return {"message": "Not implemented yet"}


@router.post("/propose-match")
async def propose_match(db: AsyncSession = Depends(get_db_session)):
    """Propose a match between transport and offer"""
    return {"message": "Not implemented yet"}


@router.post("/accept-match")
async def accept_match(match_id: str, db: AsyncSession = Depends(get_db_session)):
    """Accept a proposed match"""
    return {"message": "Not implemented yet"}
