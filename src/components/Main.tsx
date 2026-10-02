import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Main.css"
import SiteMessage from './common/sitemessage/SiteMessage';
import type { SharedStateProps } from './common/sitemessage/SiteMessage';
import books from "./books"

function Main({ message, setMessage }: SharedStateProps) {

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
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </Link>
        ))}
      </div>

      <SiteMessage message={message} setMessage={setMessage} />
    </main>
  )
}

export default Main