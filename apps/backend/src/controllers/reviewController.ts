import type { Request, Response } from "express";
import type { Review } from "../../../../shared/types/review";
import { reviewService } from "../services/reviewService";

export const reviewController = {
    async add(req: Request, res: Response) {
        const review = await reviewService.addReview(
            Number(req.params.id),
            req.body as Omit<Review, "id" | "bookId">
        );

        res.status(201).json(review);
    }
};