"""API v1 routes"""
from fastapi import APIRouter

from app.api.v1.endpoints import auth, loaders, transporters, transports, offers, matching, messages

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(loaders.router, prefix="/loaders", tags=["loaders"])
api_router.include_router(transporters.router, prefix="/transporters", tags=["transporters"])
api_router.include_router(transports.router, prefix="/transports", tags=["transports"])
api_router.include_router(offers.router, prefix="/offers", tags=["offers"])
api_router.include_router(matching.router, prefix="/matching", tags=["matching"])
api_router.include_router(messages.router, prefix="/messages", tags=["messages"])
