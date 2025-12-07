from sqlmodel import SQLModel, create_engine
from sqlmodel.ext.asyncio.session import  AsyncSession
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker


userDATABASE_URL = "sqlite+aiosqlite:///./users.db"
patientDATABASE_URL = "sqlite+aiosqlite:///./patients.db"

userengine = create_async_engine(
    userDATABASE_URL, echo=False, future=True, connect_args={"check_same_thread": False}
)
patientengine = create_async_engine(
    patientDATABASE_URL, echo=False, future=True, connect_args={"check_same_thread": False}
                                    )

userAsyncSessionLocal = async_sessionmaker(
    bind=userengine,
    class_=AsyncSession,
    expire_on_commit=False,
)

patientAsyncSessionLocal = async_sessionmaker(
    bind=patientengine,
    class_=AsyncSession,
    expire_on_commit=False,
)


async def init_db():
    async with userengine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.create_all)
    async with patientengine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.create_all)

async def get_user_session() -> AsyncSession:
    async with userAsyncSessionLocal() as session:
        yield session

async def get_patient_session()-> AsyncSession:
    async with patientAsyncSessionLocal() as session:
        yield session

