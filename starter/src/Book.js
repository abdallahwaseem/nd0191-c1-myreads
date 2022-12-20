import ShelfChanger from "./ShelfChanger";
import PropTypes from "prop-types";
const Book = ({ updateBookShelf, currentBook }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: "url(" + currentBook?.thumbnail + ")",
          }}
        ></div>
        <ShelfChanger book={currentBook} updateBookShelf={updateBookShelf} />
      </div>
      <div className="book-title">{currentBook.title}</div>
      <div className="book-authors">{currentBook.authors}</div>
    </div>
  );
};

Book.propTypes = {
  currentBook: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Book;
