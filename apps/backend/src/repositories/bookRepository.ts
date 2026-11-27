import { prisma } from "../db/prisma";
import type { Book } from "../../../../shared/types/book";

export const bookRepository = {
  async getAll(): Promise<Book[]> {
    return prisma.book.findMany({
      include: {
        reviews: true
      }
    });
  },

  async getById(id: number): Promise<Book | null> {
    return prisma.book.findUnique({
      where: { id },
      include: {
        reviews: true
      }
    });
  },

  async update(
    id: number,
    updatedBook: Omit<Book, "id" | "reviews">
   ): Promise<Book> {
    return prisma.book.update({
      where: { id },
      data: updatedBook,
      include: {
        reviews: true
      }
    });
  }
};