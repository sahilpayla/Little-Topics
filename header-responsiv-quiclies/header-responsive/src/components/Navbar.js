import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h3 className='logo'>Logo</h3>
        <ul>
          <Link to='/'>
            <li className='nav-items'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='nav-items'>About</li>
          </Link>
          <Link to='/contact'>
            <li className='nav-items'>Contact</li>
          </Link>
          <Link to='/skills'>
            <li className='nav-items'>Skills</li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar