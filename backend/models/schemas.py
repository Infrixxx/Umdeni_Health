from fastapi_users import schemas
from typing import Optional
from uuid import UUID


class UserRead(schemas.BaseUser[UUID]):
    role: str
    medical_history: Optional[str] = None
    prescriptions: Optional[str] = None
    patient_id: UUID


class UserCreate(schemas.BaseUserCreate):
    role: str
    medical_history: Optional[str] = None
    prescriptions: Optional[str] = None


class UserUpdate(schemas.BaseUserUpdate):
    role: Optional[str] = None
    medical_history: Optional[str] = None
    prescriptions: Optional[str] = None
