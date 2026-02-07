from fastapi import APIRouter, UploadFile, File, HTTPException

router = APIRouter()


@router.get("/")
async def Welcome():
    return {"message": "Welcome to the AI-Driven Log Anonymization API! , the API is up and running."}


@router.post("/upload")
async def upload_log(file: UploadFile = File(...)):
    print("uploading file")