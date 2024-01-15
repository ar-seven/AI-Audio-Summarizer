from typing import List
from fastapi import APIRouter, Depends, status, HTTPException, File, UploadFile,Form
from osa import schemas, database, models
from dao import function
from sqlalchemy.orm import Session
import os
import warnings
from moviepy.editor import *
warnings.filterwarnings('ignore')
router = APIRouter(
    prefix="/summarize",
    tags=['summary']
)
from sqlalchemy import select
get_db = database.get_db


@router.post("/" ,response_model=dict)
async def create_upload_file(file: UploadFile = Form(...),email:str=Form(...), db: Session = Depends(database.get_db)):

    user = db.query(models.FileDetails).filter(
        models.FileDetails.email == email).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Invalid Credentials")                        
    #get original file name
    file_name=file.filename

    if file_name.split(".")[-1] in ['mp4','mkv']:
        with open(f"test."+file_name.split(".")[-1], "wb") as f:
            f.write(file.file.read())
        video = VideoFileClip("test.mp4")
        video.audio.write_audiofile("test.mp3")

    else:
        with open(f"test.mp3", "wb") as f:
            f.write(file.file.read())
    transcript,summarized=function.audio_summary()    
    transcript="\n\n".join(transcript)

    transcript=function.convert_newlines_to_br(transcript)
    summarized=function.convert_newlines_to_br(summarized)

    #store in db the email, file name, transcript, summarized
    new = models.AudioSummary(file_name=file_name, summarized_text=summarized, transcribed_text=transcript, email_id=email)
    db.add(new)
    db.commit()


    return {"file_name":file_name,"transcribed_text":transcript,"summarized_text":summarized}

@router.post("/yt/" ,response_model=dict)
async def create_upload_file(link:str,email:str="arseven@gmail.com",db: Session = Depends(database.get_db)):

    user = db.query(models.FileDetails).filter(
    models.FileDetails.email == email).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Invalid Credentials")                        
    #get original file name
    file_name=link

    transcript,summarized=function.youtube_summary(link)    
    transcript="\n\n".join(transcript)

    transcript=function.convert_newlines_to_br(transcript)
    summarized=function.convert_newlines_to_br(summarized)

    new = models.AudioSummary(file_name=file_name, summarized_text=summarized, transcribed_text=transcript, email_id=email)
    db.add(new)
    db.commit()

    return {"transcribed_text":transcript,"summarized_text":summarized}
        

@router.get("/all_file/" ,response_model=dict)
async def get_user_details(email:str,db: Session = Depends(database.get_db),):

    user = db.query(models.FileDetails).filter(models.FileDetails.email == email).first()

    if user:
        audio_summaries = (
            db.query(models.AudioSummary)
            .filter(models.AudioSummary.email_id == email)
            .all()
        )

        result = {}
        for audio_summary in audio_summaries:
            result[audio_summary.id] = {
                "file_name": audio_summary.file_name,
                # "summarized_text": audio_summary.summarized_text,
                # "transcribed_text": audio_summary.transcribed_text,
            }

        return result
    else:
        return None

@router.get("/specific/" ,response_model=dict)
async def get_user_details(file_id:str,db: Session = Depends(database.get_db),):

    user = db.query(models.AudioSummary).filter(models.AudioSummary.id == file_id).first()

    if user:
         return {"file_name":user.file_name,"transcribed_text":user.transcribed_text,"summarized_text":user.summarized_text}
    else:
        return None

        