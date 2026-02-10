from fastapi import APIRouter, UploadFile, File, HTTPException
from services.AnonymizeService import AnonymizeService

router = APIRouter()


@router.get("/")
async def Welcome():
    return {"message": "Welcome to the AI-Driven Log Anonymization API! , the API is up and running."}


@router.post("/upload")
async def upload_log(file: UploadFile = File(...)):
    print ("The route is called")
    content = await file.read()
    text = content.decode("utf-8")
    anonymizer = AnonymizeService()
    anonymizedContent = anonymizer.anonymize(text)
    print ("The file is anonymized")
    print ("the result is :", anonymizedContent)
    return {"anonymizedText": anonymizedContent.text}
    
