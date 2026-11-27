import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';

// Postgress url
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

export class CommentRepository {

    /** Retrieves all comment records */
    async findAll() {
        return prisma.comment.findMany({
            orderBy: {createdAt: "desc"},
        });
    }

    /** Creates a new comment record (id and createdAt are auto generated) */
    async create(data: {text: string }) {
        const text = data.text.trim();
        if (!text) {
            throw new Error("Comment text cannot be empty");
        }

        return prisma.comment.create({
            data: { text },
        });
    }
}