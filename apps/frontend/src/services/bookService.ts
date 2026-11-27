
import type { Book } from "../../../../shared/types/book";
import { bookRepository } from "../repositories/bookRepo";

function validateBook(input: Omit<Book, "id" | "reviews">): void {
    const errors: string[] = [];

    if (input.title.trim().length < 1) {
        errors.push("Book title is required.");
    }

    if (input.author.trim().length < 1) {
        errors.push("Book author is required.");
    }

    if (input.cover.trim().length < 1) {
        errors.push("Book cover is required.");
    }

    if (input.overview.trim().length < 1) {
        errors.push("Book overview is required.");
    }

    if (errors.length > 0) {
        throw new Error(errors.join(" "));
    }
}

export const bookService = {
    async getBooks(): Promise<Book[]> {
        return bookRepository.getAll();
    },

    async getBookById(id: number): Promise<Book | null> {
        if (!Number.isInteger(id) || id < 1) {
            return null;
        }

        return bookRepository.getById(id);
    },

    async updateBook(
        id: number,
        updatedBook: Omit<Book, "id" | "reviews">
    ): Promise<Book> {
        if (!Number.isInteger(id) || id < 1) {
            throw new Error("Invalid book ID.");
        }

        const bookInput = {
            ...updatedBook,
            title: updatedBook.title.trim(),
            author: updatedBook.author.trim(),
            cover: updatedBook.cover.trim(),
            overview: updatedBook.overview.trim()
        };

        validateBook(bookInput);

        return bookRepository.update(id, bookInput);
    },
};
