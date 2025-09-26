import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBook = () => {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [book_values, setBookValues] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [keys, setKeys] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [summary, setSummary] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBook = {
      title,
      author,
      book_values,
      startDate,
      keys,
      rating,
      summary,
    };

    // Send newBook to the server or perform any other action
    console.log(newBook);
    try {
      const response = await axios.post("/new-book", newBook);
      console.log("Book added successfully:", response.data);
    } catch (error) {
      console.error("Error adding book:", error);
    }
    // Reset form fields
    setTitle("");
    setAuthor("");
    setBookValues("");
    setStartDate("");
    setKeys("");
    setRating("");
    setSummary("");
    // Redirect to home page or show a success message
    navigate("/");
  };

  return (
    <div className="div1 container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Book Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div class="row">
          <div class="col-6">
            <label for="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Author..."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div class="col-6">
            <label for="book_values">Book Values</label>
            <input
              type="text"
              id="rating"
              name="book_values"
              placeholder="123456..."
              value={book_values}
              onChange={(e) => setBookValues(e.target.value)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="row">
              <div class="col-6">
                <label for="date">Start Date</label>
                <input
                  type="text"
                  id="date"
                  name="startDate"
                  placeholder="YYYY-MM-DD"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div class="col-6">
                <label for="date">Key</label>
                <input
                  type="text"
                  id="date"
                  name="keys"
                  placeholder="YYYY-MM-DD"
                  value={keys}
                  onChange={(e) => setKeys(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <label for="rating">Ratings</label>
            <input
              type="text"
              id="rating"
              name="rating"
              placeholder="10/10"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        </div>
        <label for="summary">Summary</label>
        <input
          type="text"
          id="summary"
          name="summary"
          placeholder="summary...."
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default NewBook;
