import BookList from "./BookList";
import axios from "axios";
import type { Book } from "./types";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => setBooks(res.data));
  }, []);
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Book
      </Typography>
      <BookList books={books} />
    </>
  );
}

export default App;
