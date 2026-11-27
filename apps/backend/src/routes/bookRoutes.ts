import { Router } from "express";
import { bookController } from "../controllers/bookController";
import { validateBookBody, validateBookId } from "../validations/bookValidations";

export const bookRoutes = Router();

bookRoutes.get("/", bookController.getAll);

bookRoutes.get("/:id", validateBookId, bookController.getById);

bookRoutes.put("/:id", validateBookId, validateBookBody, bookController.update);