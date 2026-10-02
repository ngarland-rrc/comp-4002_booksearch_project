import "./BookOverview.css";
import books from "../../books";
import { useParams, Link } from 'react-router-dom';
import SiteMessage from "../../common/sitemessage/SiteMessage";
import type { SharedStateProps } from "../../common/sitemessage/SiteMessage";
import Rating from "../../common/book_rating/Rating";
import type { RatingProps } from "../../common/book_rating/Rating";

function BookOverview({ message, setMessage, ratings, setRating }: SharedStateProps & RatingProps){
  
  const { id } = useParams()
  const book = books.find((b) => b.id === Number(id))

  if (!book) {
    return (
      <div>
        <p>Book not found.</p>
        <Link to="/">Back to books</Link>
        <SiteMessage message={message} setMessage={setMessage} />
      </div>
    )
  }
  
    return (
    <div className="overview">
      <img className="cover_img" src={book.image} alt={book.title} />
      <div className="overview_text">
        <h2>{book.title}</h2>
        <p className="author">By: {book.author}</p>
        <Rating bookId={book.id} ratings={ratings} setRating={setRating} />
        <p>{book.overview}</p>
        <Link to="/">← Back to books</Link>
      </div>
      <SiteMessage message={message} setMessage={setMessage} />
    </div>
  );
}

export default BookOverview;
