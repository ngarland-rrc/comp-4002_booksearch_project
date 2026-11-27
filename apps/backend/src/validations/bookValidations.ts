import type { RequestHandler } from "express";
import { z } from "zod";

// Validate book information
const bookSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  author: z.string().trim().min(1, "Author is required"),
  cover: z.string().trim().min(1, "Cover is required"),
  overview: z.string().trim().min(1, "Overview is required")
}).strict();

// Validate book body
export const validateBookBody: RequestHandler = (
  req, res, next
) => {
  const result = bookSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      error: "Invalid book",
      details: z.flattenError(result.error)
    });
    return;
  }

  req.body = result.data;
  next();
};

// Validate book ID
export const validateBookId: RequestHandler = (
  req, res, next
) => {
  const result = z.coerce.number()
    .int()
    .positive()
    .safeParse(req.params.id);

  if (!result.success) {
    res.status(400).json({
      error: "Invalid book ID"
    });
    return;
  }

  next();
};