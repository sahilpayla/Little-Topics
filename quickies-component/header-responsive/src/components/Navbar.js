import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Navbar = () => {

  const [mobile, setMobile] = useState(false)

  return (
    <>
      <div className="navbar">

        <h3 className='logo'>Logo</h3>

        {/* links */}
        <ul className={mobile ? 'mobile-nav-links' : 'nav-links'} onClick={() => setMobile(false)}>
          <Link to='/' className='nav-items'>
            <li >Home</li>
          </Link>
          <Link to='/about' className='nav-items'>
            <li >About</li>
          </Link>
          <Link to='/contact' className='nav-items'>
            <li >Contact</li>
          </Link>
          <Link to='/skills' className='nav-items'>
            <li >Skills</li>
          </Link>
        </ul>


        {/* buttons */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!mobile)}>
          {mobile ? <ImCross /> : <FaBars />}
        </button>
      </div>
    </>
  )
}

export default Navbar