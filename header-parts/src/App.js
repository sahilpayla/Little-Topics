import logo from './logo.svg';
import Header from './components/header_section/Header';
import { Routes, Route } from 'react-router-dom'
import About from './screens/About';
import Contact from './screens/Contact';
import Features from './screens/Features';
import Login from './screens/Login';
import BookADemo from './screens/BookADemo';
import Home from './screens/Home';
import PageNotFound from './screens/PageNotFound';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/' element={<Login />} />
        <Route exact path='/' element={<About />} />
        <Route exact path='/' element={<Contact />} />
        <Route exact path='/' element={<Features />} />
        <Route exact path='/demo' element={<BookADemo />} />
        <Route exact path='*' element={<PageNotFound />} />
      </Routes>

    </div>


  );
}

export default App;
