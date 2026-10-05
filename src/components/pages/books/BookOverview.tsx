import "./BookOverview.css";
import React, {useState} from "react";
import defaultBooks, { type Book, type Review} from "../../books";
import { useParams, Link } from 'react-router-dom';
import SiteMessage from "../../common/sitemessage/SiteMessage";
import type { SharedStateProps } from "../../common/sitemessage/SiteMessage";
import Rating from "../../common/book_rating/Rating";
import type { RatingProps } from "../../common/book_rating/Rating";
import books from "../../books";

interface BookStateProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

function BookOverview({books, setBooks, message, setMessage, ratings, setRating}: SharedStateProps & RatingProps & BookStateProps){
  
  const { id } = useParams()
  const bookIdNumber = Number(id);

  const book = books.find((b) => b.id === bookIdNumber);

  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [formRating, setFormRating] = useState(5);

  if (!book) {
    return (
      <div>
        <p>Book not found.</p>
        <Link to="/">Back to books</Link>
        <SiteMessage message={message} setMessage={setMessage} />
      </div>
    )
  }

  const reviews = book.reviews ?? [];
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.userRating, 0) / reviews.length
      : 0;
  
  const addReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || !name.trim()) return;

    const newReview: Review = {
      id: Date.now(),
      reviewerName: name,
      reviewText: text,
      userRating: formRating
    };

    const updated = [newReview, ...reviews];
    const newAverage =
    updated.reduce((sum, r) => sum + r.userRating, 0) / updated.length;

    setBooks((prevBooks) =>
      prevBooks.map((b) => {
        if (b.id === bookIdNumber) {
          return {
            ...b,
            reviews: [newReview, ...(b.reviews || [])]
          };
        }
        return b;
      })
    );

    setRating(bookIdNumber, Math.round(newAverage));

    setText("");
    setName("");
    setFormRating(5);
  };

    return (
    <div className="overview">
      <img className="cover_img" src={book.image} alt={book.title} />
      <div className="overview_text">
        <h2>{book.title}</h2>
        <p className="author">By: {book.author}</p>
        <Rating bookId={book.id} 
          ratings={ratings} 
          setRating={() =>{}}
          />
        <p>{book.overview}</p>
        <Link to="/">← Back to books</Link>
      </div>

      <section className="review-section">
        <h2>Reviews ({book.reviews ? book.reviews.length : 0})</h2>
         
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
       
        <div className="comments-display-list">
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
      <SiteMessage message={message} setMessage={setMessage} />
    </div>
  );
}

export default BookOverview;
