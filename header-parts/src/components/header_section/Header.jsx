import { useState } from 'react';
import style from './header.module.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import logo from '../../Images/header_logo.png';

const Navbar = () => {

    const [mobile, setMobile] = useState(false)

    return (
        <>
            <div className={style.navbar}>

                <Link to='/'>
                    <div className={style.logo}>
                        <img src={logo} alt="logo" />
                        <div className={style.company_name}>Rare Talents</div>
                    </div>
                </Link>

                {/* links */}
                <ul className={mobile ? style.mobile_nav_links : style.nav_links} onClick={() => setMobile(false)}>
                    <li className={style.nav_items}>
                        <a href="#f">Features</a>
                    </li>
                    <li className={style.nav_items}>
                        <a href="#about">About Us</a>
                    </li>
                    <li className={style.nav_items}>
                        <a href="#footer">Contact Us</a>
                    </li>

                    <Link to='/demo' className={style.book_demo_button}>
                        <li >Book A Demo</li>
                    </Link>
                    <Link to='/' className={style.login_button}>
                        <li >Log In</li>
                    </Link>
                </ul>


                {/* buttons */}
                <button className={style.mobile_menu_icon} onClick={() => setMobile(!mobile)}>
                    {mobile ? <ImCross /> : <FaBars />}
                </button>
            </div>
        </>
    )
}

export default Navbar