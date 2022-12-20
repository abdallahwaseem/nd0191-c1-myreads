import PropTypes from "prop-types";
const ShelfChanger = ({ book, updateBookShelf }) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={book.shelf}
        onChange={(e) => updateBookShelf(book, e.target.value)}
      >
        <option value="">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};
export default ShelfChanger;
