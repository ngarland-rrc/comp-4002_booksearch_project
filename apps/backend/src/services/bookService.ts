import type { Book } from "../../../../shared/types/book";
import { bookRepository } from "../repositories/bookRepository";

export const bookService = {
    async getBooks(): Promise<Book[]> {
        return bookRepository.getAll();
    },

    async getBookById(
        id: number,
    ): Promise<Book | null> {
        if (!Number.isInteger(id) || id < 1) {
            return null;
        }

        return bookRepository.getById(id);
    },

    async updateBook(
        id: number,
        updatedBook: Omit<Book, "id" | "reviews">
    ): Promise<Book | null> {
        if (!Number.isInteger(id) || id < 1) {
            return null;
        }

        return bookRepository.update(id, updatedBook);
    },
};