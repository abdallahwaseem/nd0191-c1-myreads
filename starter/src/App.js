import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import MyBooks from "./MyBooks";
import * as BooksAPI from "./BooksAPI";

function App() {
  let navigate = useNavigate();
  const [myBooks, setMyBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const booksResponse = await BooksAPI.getAll();
      storeMyBooks(booksResponse);
    };
    getBooks();
  }, []);

  const storeMyBooks = (booksResponse) => {
    let listOfBooks = [];
    booksResponse.map((book) => {
      listOfBooks = [
        ...listOfBooks,
        {
          id: book.id,
          shelf: book.shelf,
          title: book.title,
          authors: book.authors,
          thumbnail: book?.imageLinks?.thumbnail,
        },
      ];
    });
    setMyBooks(listOfBooks);
  };

  const updateBookShelf = async (book, newShelf) => {
    // Update state locally
    book.shelf = newShelf;
    let newBooks = myBooks.filter((b) => b.id !== book.id);
    newBooks = [...newBooks, book];
    setMyBooks(newBooks);
    // Update state with api call
    await BooksAPI.update(book, newShelf);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MyBooks books={myBooks} updateBookShelf={updateBookShelf} />
          }
        />
        <Route
          path="/search"
          element={
            <SearchBooks myBooks={myBooks} updateBookShelf={updateBookShelf} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
