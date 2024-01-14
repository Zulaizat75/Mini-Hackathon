import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Aboutus from './Aboutus'
import Menu from './Menu'
import Contacts from './Contacts'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/abt' element={<Aboutus />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/ctcs' element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;