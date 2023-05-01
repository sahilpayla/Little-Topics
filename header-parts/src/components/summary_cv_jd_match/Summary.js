import React from 'react'
import phone1 from '../../Images/phone1.png'
import phone2 from '../../Images/phone2.png'
import style from './Summary.module.css';
import { Link } from 'react-router-dom';

const Summary = () => {
    return (
        <>
            <div className={style.main_container}>


                {/* left container */}
                <div className={style.left_container}>
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
                        Summary of the CV to JD match
                    </div>
                    <div className={style.subheading}>
                        <p>
                            It does not stop at the score. It goes even further. Now even get an AI powered descriptive summary of the match.
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
                                <b>Matching recommendations: </b> Score candidates' profiles based on job requirements to facilitate your screening process.
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

export default Summary