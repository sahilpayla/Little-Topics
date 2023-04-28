import React from 'react'
import style from './header.module.css'
import logo from '../../Images/header_logo.png';

const Header = () => {
    return (
        <div className={style.main_header}>
            <div className={style.header}>
                <div className={style.header_logo_section}>
                    <img src={logo} alt="" />
                    <p>Rare Talent</p>
                </div>
                <div className={style.header_left}>
                    <div className={style.header_list} >Features</div>
                    <div className={style.header_list} >About Us</div>
                    <div className={style.header_list} >Contact Us</div>

                    <div className={style.book_button}>
                        Book a demo
                    </div>
                    <div className={style.login_button}>
                        Log In
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header