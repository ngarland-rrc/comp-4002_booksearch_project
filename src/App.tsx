import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Footer from './components/common/footer/Footer'
import Header from './components/common/header/Header'
import Main from './components/Main'
import Account from './components/Account'
import Profile from './components/pages/Profile/Profile'
import News from './components/pages/News'
import Social from './components/pages/Social'
import BookOverview from './components/pages/books/BookOverview'

function App() {
  const [message, setMessage] = useState("Hello from Booksearch!")
  const shared = { message, setMessage}

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main {...shared} />} />
        <Route path="/account" element={ <Account /> } />
        <Route path="/books" element={ <Main {...shared} /> } />
        <Route path="/profile" element={<Profile {...shared} />} />
        <Route path="/news" element={<News {...shared} />} />
        <Route path="/social" element={<Social {...shared} />} />
        <Route path="/books/:id" element={<BookOverview {...shared} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
