import type {Book} from './types';

interface BookListProps {
    books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    return <div data-test='book-list'>
        {books.map(book => (
            <div className="book-item" key={book.id}>
                <h2 className="title">{book.name}</h2>
            </div>
        ))}
    </div>;
}

export default BookList;