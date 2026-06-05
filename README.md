# Meeting Intelligence Service

## Features
- JWT Authentication
- Meeting Management
- AI Analysis
- Action Item Tracking
- Reminder Scheduler
- Telegram Integration

## Tech Stack
- Node.js
- Express
- TypeScript
- PostgreSQL
- Prisma
- Gemini API

## Setup

1. Clone repository
2. Install dependencies
3. Configure .env
4. Run migrations
5. Start server

## Environment Variables

DATABASE_URL=
JWT_SECRET=
GEMINI_API_KEY=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

## Run

npm install
npx prisma migrate dev
npm run dev

## API Examples

POST /api/auth/register
POST /api/auth/login
POST /api/meetings