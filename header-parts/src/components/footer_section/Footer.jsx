import React, { useState } from 'react'
import style from './Footer.module.css';
import logo from '../../Images/Footer/footer-logo.png'
import { Link } from 'react-router-dom';
import Footer_Curve from '../footer_curve/Curve';
import axios from 'axios';
// import { toast } from 'react-toast';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Footer = () => {

    const [subscribe, setSubscribe] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(`Thank You ${subscribe.toUpperCase()} For Subscribing Rare Billions`)

        try {
            const res = await axios({
                method: "post",
                url: `${process.env.REACT_APP_SERVER_URL}/matchOTP`,
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    subscribe,
                },
            });
            if (res.status === 200) {
                toast.success(`Thank You ${subscribe.toUpperCase()} `, {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                // setDisable(false);
                // setPage("reset");
            }
        }
        catch (error) {
            toast.success(`Error Occured in the footer API`, {
                position: "bottom-center",
                autoClose: 3000,
                theme: "dark",
            });
            console.log(error.message);
        }
    }





    return (
        <>
            <Footer_Curve />
            <div id="footer" className={style.footer}>

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
                                {/* <Link to='/' > */}
                                <a href="#f">
                                    Features
                                </a>
                                {/* </Link> */}
                            </div>
                            <div className={style.navigation_items}>
                                <Link target="_blank" to='https://www.rarebillions.com'>About Us</Link>
                            </div>
                            <div className={style.navigation_items}>
                                <Link to='/demo' >Contact Us</Link>
                            </div>
                        </div>
                    </div>

                    {/* footer-right */}
                    <div className={style.footer_right}>
                        <div style={{ fontWeight: "600", fontSize: "14px" }}>Subscribe</div>
                        <div className={style.footer_email_section}>
                            <form onSubmit={handleSubmit}>
                                <input
                                    className={style.footer_email}
                                    placeholder='Enter your email'
                                    type="text"
                                    value={subscribe}
                                    onChange={(e) => setSubscribe(e.target.value)}
                                />
                                {/* <Link to='/' > */}
                                <button
                                    type='submit'
                                    className={style.footer_subscribe_button}
                                >
                                    Subscribe
                                </button>
                                {/* </Link> */}
                            </form>
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