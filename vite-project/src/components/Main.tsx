import { useState } from 'react'

function Main() {
  const books = [
    {
      id: 1,
      title: 'Book One',
      author: 'Author One',
      image: 'https://placehold.co/300x400'
    },
    {
      id: 2,
      title: 'Book Two',
      author: 'Author Two',
      image: 'https://placehold.co/300x400'
    },
    {
      id: 3,
      title: 'Book Three',
      author: 'Author Three',
      image: 'https://placehold.co/300x400'
    },
    {
      id: 4,
      title: 'Book Four',
      author: 'Author Four',
      image: 'https://placehold.co/300x400'
    },
    {
      id: 5,
      title: 'Book Five',
      author: 'Author Five',
      image: 'https://placehold.co/300x400'
    },
    {
      id: 6,
      title: 'Book Six',
      author: 'Author Six',
      image: 'https://placehold.co/300x400'
    },
    {
      id: 7,
      title: 'Book Seven',
      author: 'Author Seven',
      image: 'https://placehold.co/300x400'
    },
    {
      id: 8,
      title: 'Book Eight',
      author: 'Author Eight',
      image: 'https://placehold.co/300x400'
    }
  ]

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
      </div>

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Main