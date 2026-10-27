import type { Book } from "../types/book";
import { bookRepository } from "../repositories/bookRepo";

export const bookService = {
    async getBooks(): Promise<Book[]> {
        return bookRepository.getAll();
    },

    async getBookById(
        id:number,
    ): Promise<Book | null> {
        if(!Number.isInteger(id) || id < 1 ) {
            return null;
        } 

        return bookRepository.getById(id);
    },
}