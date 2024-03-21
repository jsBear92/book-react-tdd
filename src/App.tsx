import type {Book} from './types';
import { Typography } from "@mui/material";

const renderBooks = (books: Book[]) => {
  return <div data-test='book-list'>
    {books.map(book => (
          <div className="book-item">
            <h2 className="title">{book.name}</h2>
          </div>
        ))}
  </div>
}

function App() {
  const books = [
    { name: 'Refactoring' }, { name: 'Domain-driven design'}
  ];
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Book
      </Typography>
      {renderBooks(books)}
    </>
  );
}

export default App;
