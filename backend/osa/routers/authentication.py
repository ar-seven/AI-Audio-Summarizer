from fastapi import APIRouter, Depends, status, HTTPException
from osa import schemas, database, models
from sqlalchemy.orm import Session
import re
from hashlib import sha256
router = APIRouter(tags=['Authentication'])
get_db = database.get_db

@router.post('/signup/')
def signup(request: schemas.signup, db: Session = Depends(database.get_db)):

    if not re.match(r"[^@]+@[^@]+\.[^@]+", request.email) or len(request.password) < 8:
        raise HTTPException(status_code=403,
                            detail=f"Invalid credentials")
        
    user = db.query(models.FileDetails).filter(models.FileDetails.email == request.email).first()
    if user:
        raise HTTPException(status_code=403,
                                detail=f"User already exists")                        


    hashed_password = sha256(request.password.encode('utf-8')).hexdigest()

    new_user = models.FileDetails(name=request.name, email=request.email, password=hashed_password)
    
    db.add(new_user)
    db.commit()

    return {"detail": "True"}


@router.post('/login/')
def login(request: schemas.login, db: Session = Depends(database.get_db)):
    user = db.query(models.FileDetails).filter(
        models.FileDetails.email == request.email).first()

    hashed_password = sha256(request.password.encode('utf-8')).hexdigest() 

    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Invalid Credentials")
    print(user.password,hashed_password)                        
    if not user.password==hashed_password:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Incorrect password")

    return {"detail": "True"}
