import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/common/footer/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Account from "./components/Account"


function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={ <Account /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
      
  )
}

export default App
