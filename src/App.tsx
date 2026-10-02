import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/common/footer/Footer'
import Header from './components/common/header/Header'
import Main from './components/Main'
import Account from './components/Account'
import Profile from './components/pages/Profile'


function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={ <Account /> } />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
