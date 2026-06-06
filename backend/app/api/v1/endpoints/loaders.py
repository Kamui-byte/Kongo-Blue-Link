"""Loader endpoints"""
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db_session

router = APIRouter()


@router.get("/")
async def list_loaders(db: AsyncSession = Depends(get_db_session)):
    """List all loaders"""
    return {"message": "Not implemented yet"}


@router.post("/")
async def create_loader(db: AsyncSession = Depends(get_db_session)):
    """Create a new loader"""
    return {"message": "Not implemented yet"}


@router.get("/{loader_id}")
async def get_loader(loader_id: str, db: AsyncSession = Depends(get_db_session)):
    """Get loader by ID"""
    return {"message": "Not implemented yet"}
