import { z } from "zod";

export const createCommentSchema = z.object({
    text: z.string({ error: "text is required "})
    .trim().min(1, "Comment text cannot be empty")
    .max(500, "Comment must be 50 characters or less"),
});

export const commentIdParamSchema = z.object({
    id: z.coerce.number().int().positive(),
})

export type CreateCommentInput = z.infer<typeof createCommentSchema>