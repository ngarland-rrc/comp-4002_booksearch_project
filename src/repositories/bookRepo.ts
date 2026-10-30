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

  async update(id: number, updatedBook: Book): Promise<Book | null> {
  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return null;
  }

  books[index] = { ...updatedBook };

  return { ...books[index] };
  },

};
  