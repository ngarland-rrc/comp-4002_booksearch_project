import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { faker } from '@faker-js/faker'
// Assumes this file is at prisma/seed.ts
import { PrismaClient } from '../src/generated/prisma/client.ts'
 
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })
 
const COMMENT_COUNT = 30
 
async function main() {
  // Clear existing comments so the seed can be re-run safely
  await prisma.comment.deleteMany()
 
  // Comment { text, createdAt } (id is auto-generated)
  // CommentView.displayDate is derived at read time, so it isn't stored.
  const comments = Array.from({ length: COMMENT_COUNT }, () => ({
    text: faker.lorem.sentences({ min: 1, max: 3 }),
    createdAt: faker.date.recent({ days: 60 }),
  }))
 
  await prisma.comment.createMany({ data: comments })
 
  console.log(`Seeded ${COMMENT_COUNT} comments.`)
}
 
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
 