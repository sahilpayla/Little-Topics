import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
        <Routes>
          <Route exact path='/' element={<Navbar />} />
        </Routes>
    </>
  )
}

export default App