import React from 'react'
import style from './Footer.module.css';
import logo from '../../Images/Footer/footer-logo.png'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <div className={style.footer}>

                {/* top section  */}
                <div className={style.footer_top_section}>
                    {/* footer-right */}
                    <div className={style.footer_left}>
                        <Link to='/'>
                            <div className={style.logo_section}>
                                <img src={logo} alt="" />
                                <p>
                                    Rare Billions
                                </p>
                            </div>
                        </Link>
                        <div className={style.navigation}>
                            <div className={style.navigation_items}>
                                <Link to='/' >Features</Link>
                            </div>
                            <div className={style.navigation_items}>
                                <Link to='/' >About Us</Link>
                            </div>
                            <div className={style.navigation_items}>
                                <Link to='/' >Contact Us</Link>
                            </div>
                        </div>
                    </div>

                    {/* footer-right */}
                    <div className={style.footer_right}>
                        <div style={{ fontWeight: "600", fontSize: "14px" }}>Subscribe</div>
                        <div className={style.footer_email_section}>
                            <input className={style.footer_email} placeholder='Enter your email' type="text" />
                            <button className={style.footer_subscribe_button}>
                                Subscribe
                            </button>
                        </div>
                        <div style={{ fontSize: "14px" }}>
                            By subscribing you agree to with our Privacy Policy
                        </div>
                    </div>
                </div>

                {/* bottom section */}
                <div className={style.footer_bottom_section}>
                    <div className={style.privacy_policy_section}>
                        <div className={style.policy}>Privacy Policy</div>
                        <div className={style.policy}>Terms of Service</div>
                        <div className={style.policy}>Cookies Setting</div>
                    </div>
                    <div className={style.rights_reserved_section}>
                        2022 airdokan. All right reserved.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer