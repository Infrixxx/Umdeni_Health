from fastapi import FastAPI, Depends, HTTPException
from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession
import uuid
from typing import Optional
from app_.database import init_db, get_user_session, get_patient_session
from models.models import User, UserCreate, UserRead, UserLogin, patientRecord, FamilyMember
from app_.auth import hash_password, create_access_token, verify_password, get_current_user, get_core_session
from services.llama_engine import generate_response

async def lifespan(app: FastAPI):
    await init_db()
    yield


app = FastAPI(lifespan=lifespan)

@app.get("/users", response_model=list[UserRead])
async def list_users(session: AsyncSession = Depends(get_user_session)):
    users = await session.exec(select(User))
    return users.all()

@app.post("/users/register")
async def register_user(data: UserCreate, session: AsyncSession = Depends(get_core_session)):
    existing = await session.exec(select(User).where(User.email == data.email))
    if existing.first():
        raise HTTPException(400, "Email already taken")

    user = User(
        id = str(uuid.uuid4()),
        name=data.name, 
        email=data.email,
        password=hash_password(data.password),
        role=data.role,
        is_superuser=True if data.role.lower()=="doctor" else False
    )

    session.add(user)
    await session.commit()
    await session.refresh(user)

    return {"message": "User created", "id": user.id}


@app.post("/users/login")
async def login_user(data: UserLogin, session: AsyncSession = Depends(get_core_session)):
    query = await session.exec(select(User).where(User.email == data.email))
    user = query.first()

    if not user or not verify_password(data.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"sub": user.id})
    return {"access_token": token, "token_type": "bearer"}

@app.get("/me")
async def me(current_user: User = Depends(get_current_user)):
    return current_user

@app.post("/patients/create/{user_id}")
async def create_patient(user_id: uuid.UUID, session: AsyncSession = Depends(get_user_session), patients_sess: AsyncSession = Depends(get_patient_session)):
    query = select(User).where(User.id == str(user_id))
    result = await session.exec(query)
    user = result.first()


    if not user or user.role != "patient":
        raise HTTPException(status_code=400, detail="User is not a patient.")


    patient = patientRecord(
        user_id=str(user_id), 
        medical_history=" ", 
        medication=" "
        )
    
    patients_sess.add(patient)
    await patients_sess.commit()
    await patients_sess.refresh(patient)
    return patient

@app.get("/patients/{user_id}")
async def get_patient(user_id: uuid.UUID, session: AsyncSession = Depends(get_patient_session)):
    query = select(patientRecord).where(patientRecord.user_id == str(user_id))
    result = await session.exec(query)
    patient = result.first()


    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found.")


    return patient

@app.post("/family/add", response_model=dict)
async def add_family_member(user_id: uuid.UUID, patient_id: uuid.UUID, relationship: str, session: AsyncSession = Depends(get_patient_session)):
    family = FamilyMember(user_id=str(user_id), patient_id=str(patient_id), relationship=relationship)
    session.add(family)
    await session.commit()
    await session.refresh(family)
    return {"message": "Family member added", "family_id": str(family.patient_id)}

@app.get("/family/{user_id}")
async def get_family_members(user_id: str, session: AsyncSession = Depends(get_patient_session)):
    query = select(FamilyMember).where(FamilyMember.user_id == user_id)
    result = await session.exec(query)
    return result.all()

@app.get("/patient/{patient_id}/llama")
async def llama_patient_summary(
    patient_id: uuid.UUID,
    session: AsyncSession = Depends(get_patient_session)
):
    
    result = await session.exec(select(patientRecord).where(patientRecord.user_id == str(patient_id)))
    patient = result.first()

    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    
    medication = patient.medications
    medicalhistory = patient.medical_history

    prompt = f"Give advice on how to take the {medication} as well as tips based on {medicalhistory}"

    airesponse = generate_response(prompt)

    return {
        "patient_id": str(patient_id),
        "response": airesponse
        }