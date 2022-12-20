import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";

const SearchBooks = ({ myBooks, updateBookShelf }) => {
  const [resultBooks, setResultBooks] = useState([]);

  const searchBooksFunction = async (q) => {
    const booksResponse = await BooksAPI.search(q);
    storeSearchedBooks(booksResponse);
  };

  const storeSearchedBooks = (booksResponse) => {
    const myBooksDictionary = Object.assign(
      {},
      ...myBooks.map((b) => ({ [b.id]: b.shelf }))
    );
    let listOfBooks = [];
    if (booksResponse.error !== "empty query") {
      booksResponse.map((book) => {
        listOfBooks = [
          ...listOfBooks,
          {
            id: book.id,
            shelf: myBooksDictionary[book.id]
              ? myBooksDictionary[book.id]
              : "none",
            title: book.title,
            authors: book.authors,
            thumbnail: book?.imageLinks?.thumbnail,
          },
        ];
      });
    }
    setResultBooks(listOfBooks);
  };

  const handleOnChange = async (q) => {
    if (q !== "") {
      await searchBooksFunction(q);
    } else {
      setResultBooks([]);
    }
  };

  return (
    <div className="search-books">
      <div className="close-search">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => handleOnChange(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {resultBooks.map((b) => (
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

SearchBooks.propTypes = {
  myBooks: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default SearchBooks;
