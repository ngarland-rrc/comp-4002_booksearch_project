
import type { Book } from "../../../../shared/types/book";
import type { Review } from "../../../../shared/types/review";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const endpoint = `${baseUrl}/api/books`;

async function readJson<T>(
  response: Response
): Promise<T> {
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return (await response.json()) as T;
}

export const bookRepository = {
  async getAll(): Promise<Book[]> {
    const response = await fetch(endpoint);
    return readJson<Book[]>(response);
  },

  async getById(id: number): Promise<Book | null> {
    const response = await fetch(`${endpoint}/${id}`);

    if (response.status === 404) return null;

    return readJson<Book>(response);
  },

  async update(
    id: number,
    updatedBook: Omit<Book, "id" | "reviews">
  ): Promise<Book> {
    const response = await fetch(`${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedBook)
    });

    return readJson<Book>(response);
  },
  
  async createReview(
      bookId: number,
      review: Omit<Review, "id" | "bookId">
  ): Promise<Review> {
      const response = await fetch(`${endpoint}/${bookId}/reviews`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(review)
      });

      return readJson<Review>(response);
  }

};
