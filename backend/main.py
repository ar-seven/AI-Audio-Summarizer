from fastapi import FastAPI
from osa import  models
from osa.database import engine
from osa.routers import summarize,authentication
from fastapi.middleware.cors import CORSMiddleware
origins = [
    "http://localhost:3000",
]



app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


models.Base.metadata.create_all(engine)

app.include_router(summarize.router)
app.include_router(authentication.router)  

