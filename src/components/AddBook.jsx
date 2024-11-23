import { getDatabase, ref, push } from "firebase/database";
import { useState } from "react";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleAddBook = async e => {
    e.preventDefault();

    if (!title.trim()) {
      setMessage("Title is required!");
      return;
    }

    try {
      const db = getDatabase();
      const booksRef = ref(db, "books");

      await push(booksRef, {
        title: title.trim(),
        author: author.trim() || "Unknown",
      });

      setMessage("Book added successfully!");
      setTitle("");
      setAuthor("");
    } catch (error) {
      console.error("Error adding book:", error);
      setMessage("Failed to add the book. Please try again.");
    }
  };

  return (
    <div className="add-book-form">
      <h2>Add a Book to the Database</h2>
      <form onSubmit={handleAddBook}>
        <div>
          <label htmlFor="title">Book Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter book title"
          />
        </div>
        <div>
          <label htmlFor="author">Author (optional):</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            placeholder="Enter author's name"
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddBookForm;
