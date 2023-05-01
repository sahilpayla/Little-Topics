import React from 'react'
import phone1 from '../../Images/phone4.png'
import phone2 from '../../Images/phone3.png'
import style from './Job_description_section.module.css';
import { Link } from 'react-router-dom';

const Job_description_section = () => {
    return (
        <>
            <div id="f" className={style.main_container} >


                {/* left container */}
                <div className={style.left_container} >
                    <div className={style.phone_down}>
                        <img src={phone1} alt="" />
                    </div>
                    <div className={style.phone_up}>
                        <img src={phone2} alt="" />
                    </div>
                </div>


                {/* right container */}
                <div className={style.right_container}>
                    <div className={style.heading}>
                        Instant Job Description
                    </div>
                    <div className={style.subheading}>
                        <p>
                            Putting the right JD's together takes time and many follow up's and precious time is lost.
                        </p>
                    </div>
                    <div className={style.para}>
                        <p className={style.icon_container}>
                            <span>
                                <i className="fa-sharp fa-regular fa-circle-check"
                                    style={{
                                        color: "#00cc29",
                                        textAlign: "left",
                                        paddingRight: "10px "
                                    }}></i>
                            </span>

                            <span>
                                <b>From days to seconds: </b>   Just say "Write me a JD for a Java developer with 3 years of experience" and get a response in seconds. Review, do changes if any and done !
                            </span>
                        </p>
                    </div>
                    <Link to='/demo'>
                        <div className={style.demo}>Book a demo
                            <i className="fa-solid fa-arrow-right"
                                style={{ padding: "20px" }}
                            ></i>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Job_description_section