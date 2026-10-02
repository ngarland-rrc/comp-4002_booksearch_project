import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/common/footer/Footer'
import Header from './components/common/header/Header'
import Main from './components/Main'
import Account from './components/Account'
import Profile from './components/pages/Profile'
import News from './components/pages/News'
import Social from './components/pages/Social';


function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={ <Account /> } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<News />} />
        <Route path="/social" element={<Social />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
