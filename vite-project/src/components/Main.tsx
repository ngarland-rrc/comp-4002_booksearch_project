import { useState } from 'react'

function Main() {
  const books = [
    {
      id: 1,
      title: 'TEF French Foundations – Book 4: Advanced Grammar',
      author: 'Author One',
      image: "/assets/book-cover/book1.jpg"
    },
    {
      id: 2,
      title: 'Learn French Through Dialogues / Conversations',
      author: 'Author Two',
      image: "/assets/book-cover/book2.jpg"
    },
    {
      id: 3,
      title: 'Learning French through natural acquisition',
      author: 'Author Three',
      image: "/assets/book-cover/book3.jpg"
    },
    {
      id: 4,
      title: 'Book 3: The Choice: A Bilingual French Language Grammar',
      author: 'Author Four',
      image: "/assets/book-cover/book4.jpg"
    },
    {
      id: 5,
      title: 'Book 2: The Secrets: A Bilingual French Language Grammar',
      author: 'Author Five',
      image: "/assets/book-cover/book5.jpg"
    },
    {
      id: 6,
      title: 'TEF CANADA EXPRESSION ÉCRITE- 150 Topics To Succeed',
      author: 'Author Six',
      image: "/assets/book-cover/book6.jpg"
    },
    {
      id: 7,
      title: 'Book 4: The Blossoming: A Bilingual French Language Grammar',
      author: 'Author Seven',
      image: "/assets/book-cover/book7.jpg"
    },
    {
      id: 8,
      title: 'Book 3: Complex Structures: Future, Conditional, Relative',
      author: 'Author Eight',
      image: "/assets/book-cover/book8.jpg"
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