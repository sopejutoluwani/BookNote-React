import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Books from "./Books";
import { useNavigate } from "react-router-dom";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [data, setData] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [activeNoteId, setActiveNoteId] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  console.log("Current book ID:", id);

  // Fetch books
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/");
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  // Fetch notes
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/notes?id=${id}`);
        setNotes(res.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, [id]);

  // Find book by id
  const book = data.find((b) => String(b.id) === id);

  //console.log("Book found:", book);
  console.log("Notes:", notes);

  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const res = await axios.post("http://localhost:5000/submit", {
        bookId: id,
        notes: noteText,
      });
      setNotes((prevNotes) => [...prevNotes, res.data]);
      setNoteText(""); // Clear the textarea after submission
      navigate(`/notes?id=${id}`); // Redirect to the notes page
    } catch (error) {
      console.error("Error submitting note:", error);
    }
  };

  const handleDelete = async (noteId) => {
    try {
      await axios.delete(`http://localhost:5000/notes/${noteId}`);
      setNotes(notes.filter((note) => note.id !== noteId));
      navigate(`/notes?id=${id}`); // Redirect to the notes page
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  function toggleDeleteButton(noteId) {
    if (activeNoteId === noteId) {
      setActiveNoteId(null); // Hide delete button if already active
    } else {
      setActiveNoteId(noteId); // Show delete button for the active note
    }
  }

  return (
    <div className="container">
      <div>
        {book ? <Books info={book} /> : <p>Book not found</p>}

        {notes.map((note) => (
          <div key={note.id} className="Notes">
            <p onClick={() => toggleDeleteButton(note.id)}>{note.notes}</p>
            <br />
            {activeNoteId === note.id && (
              <button
                onClick={() => handleDelete(note.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            )}
            <hr />
          </div>
        ))}
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="notes">Enter your notes:</label>
            <br />
            <textarea
              name="notes"
              id="notes"
              className="note"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Notes;
