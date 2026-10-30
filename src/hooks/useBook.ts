import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Book } from "../types/book";
import { bookService } from "../services/bookService";

export function useBook() {
  const { id } = useParams();
  const bookId = Number(id);

  const [book, setBook] = useState <Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false

    async function loadBook() {
      setLoading(true);
      setError(null);
      setBook(null);

      if (!id || !Number.isInteger(bookId) || bookId < 1) {
        setError("Not a valid book ID.");
        setLoading(false);
        return;
      }

      try {
        const fetchedBook = 
          await bookService.getBookById(bookId);
        
        if (ignore) {
          return;
        }

        if (!fetchedBook) {
          setError("Book not found.");
          return;
        }

        setBook(fetchedBook);
      } catch {
        if(!ignore){
          setError("Unable to load book.")
        }
      } finally {
        if(!ignore){
          setLoading(false);
        }
      }
    }

    loadBook();

    return () => {
      ignore = true;
    };
  }, [id,bookId]);


  return { book, loading, error, setBook};
}