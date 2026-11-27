import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/common/footer/Footer'
import Header from './components/common/header/Header'
import Main from './components/pages/Landing/Main'
import Account from './components/pages/Account/Account'
import Profile from './components/pages/Profile/Profile'
import News from './components/pages/News/News'
import Social from './components/pages/Social/Social'
import BookOverview from './components/pages/Bookoverview/BookOverview'
import { bookService } from './services/bookService'
import type { Book } from '../../../shared/types/book'

function App() {
  const [message, setMessage] = useState("Hello from Booksearch!")
  
  const [ratings, setRatings] = useState<Record<number, number>>({})

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function loadBooks() {
      try {
        const books = await bookService.getBooks()
        setBooks(books)
      } catch (error) {
        console.error("Failed to load books:", error)
      }
    }
    
    loadBooks()
  }, [])
  
  const setRating = (bookId: number, value: number) => {
  setRatings((prev) => ({ ...prev, [bookId]: value }))
  }

  const shared = { books, setBooks, message, setMessage, ratings, setRating }
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main {...shared} />} />
        <Route path="/account" element={ <Account /> } />
        <Route path="/books" element={ <Main {...shared} /> } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<News />} />
        <Route path="/social" element={<Social />} />
        <Route path="/books/:id" element={<BookOverview {...shared} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
