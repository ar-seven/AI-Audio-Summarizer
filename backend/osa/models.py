from sqlalchemy import Column, Integer, String, ForeignKey, JSON, UniqueConstraint, Float
from osa.database import Base
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
class FileDetails(Base):
    __tablename__ = "user_details"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String,primary_key=True)
    password = Column(Integer)
    audio_summaries = relationship("AudioSummary", back_populates="user")

class AudioSummary(Base):
    __tablename__ = "audio_summary"

    id = Column(Integer, primary_key=True, index=True)
    file_name = Column(String)
    summarized_text = Column(String)
    transcribed_text = Column(String)
    email_id = Column(Integer, ForeignKey('user_details.email'))
    

    user = relationship("FileDetails", back_populates="audio_summaries")    
