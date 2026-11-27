
import type { Request, Response } from "express";
import type { Book } from "../../../../shared/types/book";
import { bookService } from "../services/bookService";

export const bookController = {
  async getAll(_req: Request, res: Response) {
    const books = await bookService.getBooks();
    res.json(books);
  },

  async getById(req: Request, res: Response) {
    const book = await bookService.getBookById(
      Number(req.params.id)
    );

    if (!book) {
      res.status(404).json({ error: "Book not found" });
      return;
    }

    res.json(book);
  },

  async update(req: Request, res: Response) {
    const book = await bookService.updateBook(
      Number(req.params.id),
      req.body as Omit<Book, "id" | "reviews">
    );

    if (!book) {
      res.status(404).json({ error: "Book not found" });
      return;
    }

    res.json(book);
  }
};
