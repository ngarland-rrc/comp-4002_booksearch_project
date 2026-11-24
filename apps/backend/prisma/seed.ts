import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
 
const prisma = new PrismaClient()
 
const PROFILE_COUNT = 5
const COMMENT_COUNT = 30
 
async function main() {
  // Clear existing data so the seed can be re-run safely
  await prisma.comment.deleteMany()
  await prisma.profile.deleteMany()
 
  // ProfileInfo { username, bio }
  const profiles = Array.from({ length: PROFILE_COUNT }, () => ({
    username: faker.internet.username().toLowerCase(),
    bio: faker.lorem.sentence({ min: 6, max: 14 }),
  }))
 
  await prisma.profile.createMany({
    data: profiles,
    skipDuplicates: true,
  })
 
  // Comment { text, createdAt } (id is auto-generated)
  // CommentView.displayDate is derived at read time, so it isn't stored.
  const comments = Array.from({ length: COMMENT_COUNT }, () => ({
    text: faker.lorem.sentences({ min: 1, max: 3 }),
    createdAt: faker.date.recent({ days: 60 }),
  }))
 
  await prisma.comment.createMany({ data: comments })
 
  console.log(
    `Seeded ${PROFILE_COUNT} profiles and ${COMMENT_COUNT} comments.`
  )
}
 
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
