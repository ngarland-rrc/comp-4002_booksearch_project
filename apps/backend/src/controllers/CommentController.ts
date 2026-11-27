import type { Request, Response, NextFunction } from "express";
import { CommentService } from "../services/CommentService";
import { commentIdParamSchema, createCommentSchema } from "../schemas/comment.schema";

const service = new CommentService();

export class CommentController {
    static async getAll(_req: Request, res: Response, next: NextFunction) {
        try {
            const comments = await service.getAll();
            res.status(200).json(comments);
        } catch (e) {
            next (e);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const parsed = createCommentSchema.safeParse(req.body);
            if (!parsed.success) {
                return res.status(400).json({
                    message: "Validation failed",
                    errors: parsed.error.issues.map((i) => ({
                        field: i.path.join("."),
                        message: i.message,
                    })),
                });
            }

            const comment = await service.create(parsed.data);
            res.status(201).json(comment);
        } catch (e) {
            next(e);
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const parsed = commentIdParamSchema.safeParse(req.params);
            if (!parsed.success) {
                return res.status(400).json({ message: "invalid comment id" });
            }

            const deleted = await service.delete(parsed.data.id);
            if (!deleted) {
                return res.status(404).json({ message: "Comment not found" });
            }

            res.status(204).send();
        } catch (e) {
            next(e);
        }
    }
}