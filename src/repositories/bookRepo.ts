import  initialBooks from "../mockData/books"
import type { Book } from "../types/book"

let books: Book[] = initialBooks.map((book) => ({
    ...book,
}));

export const bookRepository = {
  async getAll(): Promise<Book[]> {
    return books.map((book) => ({
      ...book,
    }));
  },

    async getById(id: number): Promise<Book | null> {
    const book = books.find(
      (book) => book.id === id,
    );

    return book ? { ...book } : null;
  },
};