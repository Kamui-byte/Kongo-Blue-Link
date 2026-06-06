"""Authentication endpoints"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from datetime import timedelta

from app.core.database import get_db_session
from app.core.security import create_access_token, get_password_hash, verify_password
from app.schemas.auth import TokenRequest, TokenResponse
from app.schemas.user import UserCreate, UserResponse

router = APIRouter()


@router.post("/register", response_model=UserResponse)
async def register(user_data: UserCreate, db: AsyncSession = Depends(get_db_session)):
    """Register a new user"""
    return {"message": "Not implemented yet"}


@router.post("/login", response_model=TokenResponse)
async def login(credentials: TokenRequest, db: AsyncSession = Depends(get_db_session)):
    """Login user and get access token"""
    return {"message": "Not implemented yet"}
