import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Header = () => {
    return (
        <>
            <div className="header">
                {/* logo  */}
                <h3 className='logo'><Link to='/'>LOGO</Link></h3>

                {/* links */}
                <ul className='nav-links'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                    <Link to='/service'><li>Service</li></Link>
                </ul>
            </div>
        </>
    )
}

export default Header