import type { Review } from "../../../../shared/types/review";
import { reviewRepository } from "../repositories/reviewRepository";

export const reviewService = {
    async addReview(
        bookId: number,
        review: Omit<Review, "id" | "bookId">
    ): Promise<Review> {
        if (!Number.isInteger(bookId) || bookId < 1) {
            throw new Error("Invalid book ID.");
        }

        if (!review.reviewerName.trim()) {
            throw new Error("Reviewer name is required.");
        }

        if (!review.reviewText.trim()) {
            throw new Error("Review text is required.");
        }
        
        return reviewRepository.create(bookId, {
            reviewerName: review.reviewerName.trim(),
            reviewText: review.reviewText.trim(),
            userRating: review.userRating
        });
    }
};