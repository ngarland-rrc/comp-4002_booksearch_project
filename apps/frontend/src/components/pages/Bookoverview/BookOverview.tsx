import "./BookOverview.css";
import React, {useState} from "react";
import type { Book } from "../../../../../../shared/types/book";
import { Link } from 'react-router-dom';
import Rating from "../../common/book_rating/Rating";
import type { RatingProps } from "../../common/book_rating/Rating";
import { useBook } from "../../../hooks/useBook";
import { bookService } from "../../../services/bookService";

interface BookStateProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

function BookOverview({
  setBooks, 
  ratings, setRating}: RatingProps & BookStateProps){
  
  const { book, loading, error, setBook } = useBook();

  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [formRating, setFormRating] = useState(5);

  if (loading) {
    return <p>Loading book...</p>;
  }

  if (error || !book) {
    return (
      <div>
        <p>{error ?? "Book not found."}</p>
        <Link to="/">Back to books</Link>
      </div>
    );
  }

  const reviews = book.reviews ?? [];

  const addReview = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!text.trim() || !name.trim()) return;

      try {
          // Save the review 
          const savedReview = await bookService.addReview(book.id, {
              reviewerName: name,
              reviewText: text,
              userRating: formRating
          });

          // Add the saved review to the displayed reviews
          const updatedReviews = [savedReview, ...reviews];

          const updatedBook: Book = {
              ...book,
              reviews: updatedReviews
          };

          // Updates the current book
          setBook(updatedBook);

          // Updates the parent books array
          setBooks((prevBooks) =>
              prevBooks.map((b) =>
                  b.id === updatedBook.id ? updatedBook : b
              )
          );

          // Update the average rating
          const newAverage =
              updatedReviews.reduce(
                  (sum, review) => sum + review.userRating, 0
              ) / updatedReviews.length;

          setRating(book.id, Math.round(newAverage));

          setText("");
          setName("");
          setFormRating(5);

      } catch (error) {
          console.error("Failed to save review:", error);
      }
};
    return (
    <div className="overview">
      <img className="cover_img" src={book.cover} alt={book.title} />
      <div className="overview_text">
        <h2>{book.title}</h2>
        <p className="author">
          By: {book.author}
        </p>
        <Rating bookId={book.id} 
          ratings={ratings} 
          setRating={() =>{}}
          />
        <p>{book.overview}</p>
        <Link to="/">← Back to books</Link>
      </div>

      <section className="review-section">
        <h2>Reviews</h2>
        <form onSubmit={addReview} className="comment-form">
          <div className="rating-row">
            <label>Your Rating: </label>
            <Rating 
              bookId={book.id} 
              ratings={{[book.id]: formRating}} 
              setRating={(_id, score) => setFormRating(score)} 
            />
          </div>

          <div className="name-row">
            <input
              id="name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>

          <textarea
            id="review-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a review..."
            rows={3}
          />
          <button type="submit" disabled={!text.trim() || !name.trim()}>
            Post review
          </button>
        </form>
       
        <div className="review-display-list">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-card-header">
                <span>{'★'.repeat(review.userRating)}</span>
                <strong> — {review.reviewerName}</strong>
              </div>
              <p>"{review.reviewText}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BookOverview;
