import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Main.css"
import Rating from '../../common/book_rating/Rating';
import type { Book } from '../../../../../../shared/types/book';

interface MainProps {
  books: Book[];
  ratings: Record<number, number>;
}

function Main({ books, ratings,}: MainProps) {

  const [search, setSearch] = useState('')

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main>

      <div className="search">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>

        <Link className='account-link' to="/account">Account</Link>
        
      </div>

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <Link to={`/books/${book.id}`} className="book-card" key={book.id}>
            <img src={book.cover} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <Rating bookId={book.id} ratings={ratings} setRating={() =>{}} />
          </Link>
        ))}
      </div>

    </main>
  )
}

export default Main