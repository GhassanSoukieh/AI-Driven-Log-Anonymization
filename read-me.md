This project is a full-stack application with a FastAPI back-end and a React front-end. It uses `uv` for Python dependency management.

## Prerequisites

1.  **Node.js & npm** (for the front-end)
2.  **UV** (for the back-end)
    - Install UV (Windows): `powershell -c "irm https://astral.sh/uv/install.ps1 | iex"`
    - Install UV (Mac/Linux): `curl -LsSf https://astral.sh/uv/install.sh | sh`

---

## Installation

### 1. Back-end Setup

Navigate to the back-end folder, sync dependencies, and download the required AI model.

```bash
cd back-end
uv sync
uv run python -m spacy download sv_core_news_lgWelcome
```

### 2. Front-end Setup

```bash
cd ../front-end
npm install
```
