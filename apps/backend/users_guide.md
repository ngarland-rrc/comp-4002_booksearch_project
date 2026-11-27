# Full Backend Deployment Steps for fresh local repositories

## 1. Install dependencies (also runs prisma generate via postinstall)

npm install

## 2. Create apps/backend/.env with the Docker URL

Copy this into a .env file --> DATABASE_URL="postgresql://booksearch:booksearchdevteam@localhost:5433/booksearch"

## 3. Start Postgres (from the folder with docker-compose.yml, or any subfolder of the repo)

docker-compose up -d

## 4. Generate the client

1. **cd apps/backend**
2. npx prisma generate --config prisma7.config.ts

## 5. Create the tables

npx prisma migrate dev --name init --config prisma7.config.ts

## 6. Seed the data

npx prisma db seed --config prisma7.config.ts

## 7. Start the backend

1. **change your directory to root (cd ../..)** so the concurrently script can run the frontend and backend simutaniously

2. npm run dev to start the vite frontend and the node backend.

## 8. (Optional) Verify Postgresql functionality by testing an endpoint or using pgadmin4, or view the schema

1. Start a new bash terminal since your other terminal is busy running the frontend and backend
2. **cd apps/backend** and enter npx prisma studio into the bash terminal
