import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

const MyBooks = ({ books, updateBookShelf }) => {
  const shelfs = [
    { shelfTitle: "Currently Reading", shelfFilter: "currentlyReading" },
    { shelfTitle: "Want To Read", shelfFilter: "wantToRead" },
    { shelfTitle: "Read", shelfFilter: "read" },
  ];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfs.map((s) => (
            <BookShelf
              key={s.shelfTitle}
              bookShelfTitle={s.shelfTitle}
              books={books}
              bookShelfFilter={s.shelfFilter}
              updateBookShelf={updateBookShelf}
            />
          ))}
        </div>
      </div>
      <Link to="/search" className="open-search">
        <p>Add a book</p>
      </Link>
    </div>
  );
};

MyBooks.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};
export default MyBooks;
