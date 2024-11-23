import { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database"; // Import Firebase database functions
import { auth } from "../utils/firebase"; // Make sure you have the auth imported

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [userBooksCount, setUserBooksCount] = useState({});

  useEffect(() => {
    const db = getDatabase();

    // Fetch all books
    const booksRef = ref(db, "books");
    get(booksRef).then(snapshot => {
      if (snapshot.exists()) {
        const booksData = snapshot.val();
        const bookArray = Object.keys(booksData).map(key => ({
          id: key,
          ...booksData[key],
        }));
        setBooks(bookArray);
      } else {
        console.log("No books found");
      }
    });

    // Fetch books count per user
    if (auth.currentUser) {
      const userRef = ref(db, `users/${auth.currentUser.uid}/books`);
      get(userRef).then(snapshot => {
        if (snapshot.exists()) {
          setUserBooksCount(snapshot.val());
        } else {
          console.log("No user data found");
        }
      });
    }
  }, [auth.currentUser]);

  return (
    <div className="books-list">
      <h2>Total Books in Database: {books.length}</h2>
      <div>
        <h3>Your Books (Total: {Object.keys(userBooksCount).length})</h3>
        {Object.keys(userBooksCount).map(bookId => {
          const book = books.find(b => b.id === bookId);
          return (
            book && (
              <div key={bookId} className="book-card">
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <p>{book.description}</p>
              </div>
            )
          );
        })}
      </div>
      <div className="books-cards">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
