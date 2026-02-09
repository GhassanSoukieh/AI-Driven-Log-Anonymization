from fastapi import FastAPI
from src.api import routes
from fastapi.middleware.cors import CORSMiddleware
import uvicorn



app = FastAPI(
    title="AI-Driven-Log-Anonymization",
    version="1.0.0"
)

app.include_router(routes.router)


# Configure CORS to allow requests from any origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow requests from any domain
    allow_credentials=True,
    allow_methods=["*"],   # allow GET, POST, etc.
    allow_headers=["*"],   # allow all headers)
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
    