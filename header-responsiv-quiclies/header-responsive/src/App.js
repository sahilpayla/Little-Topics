import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import ContactUs from './screens/ContactUs';
import Service from './screens/Service';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './screens/PageNotFound';


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<ContactUs />} />
        <Route exact path='/servi' element={<Service />} />
        <Route exact path='*' element={<PageNotFound />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
