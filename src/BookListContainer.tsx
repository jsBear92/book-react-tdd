import BookList from "./BookList";
import useBooks from "./useBooks";

const BookListContainer = () => {
  const { isLoading, error, books } = useBooks();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return <BookList books={books} />;
};

export default BookListContainer;
