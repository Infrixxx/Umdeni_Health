from sqlalchemy import Column, String, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import DeclarativeBase
from fastapi_users.db import SQLAlchemyBaseUserTableUUID
from uuid import uuid4

class Base(DeclarativeBase):
    pass

class User(SQLAlchemyBaseUserTableUUID, Base):
    __tablename__ = "users"

    role = Column(String, default="patient", nullable=False)
    medical_history = Column(Text, nullable=True)
    prescriptions = Column(Text, nullable=True)

    if role == "patient":
        patient_id = Column(UUID(as_uuid=True), default=uuid4, unique=True, index=True)
