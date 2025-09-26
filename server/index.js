import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";
import cors from "cors";

env.config();
const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const db = new pg.Client({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect();

let items;

app.get("/", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM books ORDER BY id ASC ");
    items = results.rows;
    res.json(items);
    //console.log(items);
  } catch (error) {
    console.log(error);
  }
});

app.post("/new-book", async (req, res) => {
  const { title, author, book_values, startDate, keys, rating, summary } =
    req.body;
  //console.log({ title, author, book_values, startDate, keys, rating, summary });
  //res.json({ title, author, book_values, startDate, keys, rating, summary });

  try {
    const results = await db.query(
      "insert into books (title, author,dates,rating,summary,keys,b_values) values ($1,$2,$3,$4,$5,$6,$7) returning author",
      [title, author, startDate, rating, summary, keys, book_values]
    );

    //res.json({results})
  } catch (error) {
    console.log(error);
  }
});

app.get("/notes", async (req, res) => {
  const bookId = req.query.id;
  console.log("Book ID from query:", bookId);
  try {
    const results = await db.query("SELECT * FROM notes WHERE books_id = $1", [
      bookId,
    ]);
    res.json(results.rows);
  } catch (error) {
    console.log(error);
  }

  //res.json({bookId})
});

app.post("/submit", async (req, res) => {
  const { notes, bookId } = req.body;

  //console.log(BookId, Notes);

  try {
    const results = await db.query(
      "INSERT INTO notes (notes, books_id) VALUES ($1, $2) returning *",
      [notes, bookId]
    );
    console.log(results.rows[0]);
    res.json(results.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error adding note." });
  }
});

// delete note by id
app.delete("/notes/:id", async (req, res) => {
  const noteId = req.params.id;

  try {
    await db.query("DELETE FROM notes WHERE id = $1", [noteId]);
    res.json({ success: true, message: "Note deleted successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error deleting note." });
  }
});
app.delete("/books/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    await db.query("DELETE FROM books WHERE id = $1", [bookId]);
    res.json({ success: true, message: "Book deleted successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error deleting book." });
  }
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
