import "./BookOverview.css"
import books from "../books"
import { useParams, Link } from 'react-router-dom'


function BookOverview(){
  
  const { id } = useParams()
  const book = books.find((b) => b.id === Number(id))

  if (!book) {
    return (
      <div>
        <p>Book not found.</p>
        <Link to="/">Back to books</Link>
      </div>
    )
  }
  
    return (
    <div className="overview">
      <img className="cover_img" src={book.image} alt={book.title} />
      <div className="overview_text">
        <h2>{book.title}</h2>
        <p className="author">By: {book.author}</p>
        <p>{book.overview}</p>
        <Link to="/">← Back to books</Link>
      </div>
    </div>
  );
}

export default BookOverview;
