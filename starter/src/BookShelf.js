import Book from "./Book";
import PropTypes from "prop-types";
// Here we fitler the books by bookShelfFilter
const BookShelf = ({
  bookShelfTitle,
  books,
  bookShelfFilter,
  updateBookShelf,
}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((bookFilter) => bookFilter.shelf === bookShelfFilter)
            .map((b) => (
              <li key={b.id}>
                {" "}
                {<Book updateBookShelf={updateBookShelf} currentBook={b} />}
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  bookShelfFilter: PropTypes.string.isRequired,
  bookShelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};
export default BookShelf;
