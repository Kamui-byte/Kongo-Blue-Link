"""Message endpoints"""
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db_session

router = APIRouter()


@router.get("/")
async def list_messages(db: AsyncSession = Depends(get_db_session)):
    """List messages for current user"""
    return {"message": "Not implemented yet"}


@router.post("/")
async def send_message(db: AsyncSession = Depends(get_db_session)):
    """Send a message"""
    return {"message": "Not implemented yet"}
