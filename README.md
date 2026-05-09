# Car Services Platform

Door-to-door car service web app with a customer booking form and a protected admin portal.

## Stack
- Frontend: React + TypeScript + Vite
- Backend: FastAPI
- Database: PostgreSQL

## Features
- Customer order form for home service and mobile service
- Admin portal at `/admin`
- Customer, order, team, inventory, expense, and PNL management
- Cash-only workflow for on-spot collection

## Run locally
1. Start PostgreSQL.
2. Copy `backend/.env.example` to `backend/.env` and set the database URL.
3. Install backend dependencies:

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

4. Install frontend dependencies:

```bash
cd frontend
npm install
npm run dev
```

## Default admin login
- Username: `admin`
- Password: `admin123`

Update these values in `backend/.env` before production use.
