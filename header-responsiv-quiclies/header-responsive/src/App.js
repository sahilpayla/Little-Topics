import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Skills from './screens/Skills'
import Contact from './screens/Contact'
import About from './screens/About'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/skills' element={<Skills />} />
      </Routes>
    </>
  )
}

export default App