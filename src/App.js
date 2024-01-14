import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home_Amir'
import Navbar from './Navbar_Zul'
import Aboutus from './Aboutus_Anudiip'
import Menu from './Menu_Ariff'
import Contacts from './Contacts_Shashi'
import Footer from './Footer_Zul'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/abt' element={<Aboutus />} />
          <Route path='/ctcs' element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;