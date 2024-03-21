import { useEffect, useState } from "react";
import type { Book } from "./types";
import axios from "axios";

const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/books");
        setBooks(response.data);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);
  return { isLoading, error, books }
};
export default useBooks;