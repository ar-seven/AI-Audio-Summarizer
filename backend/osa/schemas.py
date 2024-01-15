from typing import List, Optional
from pydantic import BaseModel


class signup(BaseModel):
    email : str
    name: str
    password: str

class login(BaseModel):
    email : str
    password: str

class dashboard(BaseModel):
    email : str
    