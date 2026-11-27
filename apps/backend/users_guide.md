# Full Backend Deployment Steps for fresh local repositories

## 1. Install dependencies (also runs prisma generate via postinstall)

npm install

## 2. Create apps/backend/.env with the Docker URL

Copy this into a .env file --> DATABASE_URL="postgresql://booksearch:booksearchdevteam@localhost:5433/booksearch"

## 3. Start Postgres (from the folder with docker-compose.yml, or any subfolder of the repo)

docker-compose up -d

## Change Directory

cd to apps/backend

## 4. Generate the client

npx prisma generate --config prisma7.config.ts

## 5. Create the tables

npx prisma migrate dev --name init --config prisma7.config.ts

## 6. Seed the data

npx prisma db seed --config prisma7.config.ts

## 7. Start the backend

change your directory to root so the concurrently script can run the frontend and backend simutaniously

npm run dev to start the vite frontend and the node backend.

## 8. (Optional) Verify Postgresql functionality by testing an endpoint or using pgadmin4

cd apps/backend
npx prisma studio in bash to view the prisma client in the prisma studio software
