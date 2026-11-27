import { prisma } from "../db/prisma";
import type { Review } from "../../../../shared/types/review";

export const reviewRepository = {
    async create(
        bookId: number,
        review: Omit<Review, "id" | "bookId">
    ): Promise<Review> {
        return prisma.review.create({
            data: {
                ...review,
                bookId
            }
        });
    }
};