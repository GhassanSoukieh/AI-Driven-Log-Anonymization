@echo off

:: start the back-end server
start "back-end" cmd /k "cd back-end && uv run uvicorn main:app --reload"

:: start the front-end server
start "front-end" cmd /k "cd front-end && npm run dev"