from sqlmodel import SQLModel, Field
from typing import Optional
import uuid

class User(SQLModel, table=True):
    id: str = Field(default=lambda: str(uuid.uuid4()), primary_key=True, index=True, nullable=False)
    name: str
    email: str = Field(index=True, unique=True)
    password: str
    role : str
    is_superuser: bool = Field(default=False)


class UserCreate(SQLModel):
    name: str
    email: str
    password: str
    role: str

class UserRead(SQLModel):
    id: str
    name: str
    email: str
    role: str
    is_superuser: bool

class UserLogin(SQLModel):
    email: str
    password: str

class patientRecord(SQLModel, table=True):
    user_id: str = Field(default=lambda: str(uuid.uuid4()), primary_key=True, index=True, nullable=False)
    medical_history: str = Field(default=" ")
    medications: str = Field(default=" ")

class FamilyMember(SQLModel, table=True):
    user_id: str = Field(default=lambda: str(uuid.uuid4()), primary_key=True, index=True, nullable=False)
    patient_id: str 
    relationship: str


