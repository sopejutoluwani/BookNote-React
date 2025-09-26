import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Books({ info, onDelete }) {
  const [activeBookId, setActiveBookId] = React.useState(null);
  const navigate = useNavigate();

  const handleDelete = async (bookId) => {
    // Implement delete functionality here
    try {
      await axios.delete(`http://localhost:5000/books/${bookId}`);

      if (onDelete) onDelete(bookId);
      navigate("/"); // Redirect to home after deletion
      console.log("Book deleted successfully");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
    console.log("Delete book with ID:", bookId);
  };

  function toggleDelete(bookId) {
    if (activeBookId === bookId) {
      setActiveBookId(null); // Hide delete confirmation if already active  
    } else {
      setActiveBookId(bookId); // Show delete confirmation for the selected book
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <img
            src={`https://covers.openlibrary.org/b/isbn/${info.b_values}-L.jpg`}
            alt="to be generated"
            className="img2"
          />
        </div>
        <div className="content col-9">
          <Link to={`/notes?id=${info.id}`} class="book-title">
            {info.title} By {info.author}
          </Link>
          <p>Started reading {info.dates} </p>
          <p className="rating">Ratings: {info.rating} /10</p>
          <p className="summary" onClick={() => toggleDelete(info.id)}> {info.summary}</p>
          {activeBookId === info.id && (
            <div>
              <p>Are you sure you want to delete this book?</p>
              <button className="btn btn-danger" onClick={() => handleDelete(info.id)}>Delete Book</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Books;
