import { Request, Response, NextFunction } from 'express';
import { z } from 'zod'; // 1. Import 'z' instead of ZodTypeAny

// Use z.ZodTypeAny to avoid import errors
export const validate = (schema: z.ZodTypeAny) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validate request body, query, and params against the schema
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next(); // Validation passed, proceed to the next handler
  } catch (error: any) {
    // Validation failed, return 400 error and detailed error reasons
    return res.status(400).json({ 
      error: "Validation failed", 
      details: error.errors 
    });
  }
};