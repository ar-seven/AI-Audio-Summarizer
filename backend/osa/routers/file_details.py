from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from osa import database, models, schemas

router = APIRouter(
    prefix="/file_details",
    tags=["file_details"],
)

get_db = database.get_db

@router.get("/", )
def get_all_file_details(db: Session = Depends(get_db)):
    file_details = db.query(models.FileDetails).all()

    if not file_details:
        raise HTTPException(status_code=404, detail="No file details found")
    response_data={}



    for file_detail in file_details:
        response_data[file_detail.id]={
        "name":file_detail.name,
        "age":file_detail.age,
        "sex":file_detail.sex,
        "medical_info":file_detail.medical_info,
        }
    return response_data
