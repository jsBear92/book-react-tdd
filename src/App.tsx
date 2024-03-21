import BookList from './BookList';
import { Typography } from "@mui/material";

function App() {
  const books = [
    { name: 'Refactoring' }, { name: 'Domain-driven design'}
  ];
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
