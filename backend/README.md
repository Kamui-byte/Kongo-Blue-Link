# Kongo Blue Link - Backend API

Backend API for Kongo Blue Link logistics platform built with FastAPI.

## 🚀 Features

- FastAPI for high-performance async API
- SQLAlchemy 2.0 ORM with PostgreSQL
- OAuth2 JWT authentication
- Redis for caching
- Comprehensive data models for logistics
- RESTful API endpoints

## 📋 Prerequisites

- Python 3.10+
- PostgreSQL 12+
- Redis 6+
- Poetry

## 🔧 Installation

```bash
git clone https://github.com/Kamui-byte/Kongo-Blue-Link.git
cd Kongo-Blue-Link/backend

poetry install

cp .env.example .env
```

## ▶️ Running the Application

```bash
poetry shell

python server.py

uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API: `http://localhost:8000`
Docs: `http://localhost:8000/docs`

## 📁 Project Structure

```
backend/
├── app/
│   ├── api/
│   │   └── v1/
│   │       └── endpoints/
│   ├── core/
│   │   ├── config.py
│   │   ├── database.py
│   │   └── security.py
│   ├── models/
│   ├── schemas/
│   └── main.py
├── tests/
├── migrations/
├── pyproject.toml
├── server.py
└── README.md
```

## 📊 Database Setup

```bash
psql -U postgres -c "CREATE DATABASE kongo_blue_link;"
```

## 🧪 Testing

```bash
pytest

pytest --cov=app
```

## 📚 API Documentation

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## 🔐 Authentication

```
Authorization: Bearer <your_access_token>
```

## 📝 License

MIT
