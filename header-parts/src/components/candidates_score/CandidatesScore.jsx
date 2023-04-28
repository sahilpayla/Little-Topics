import React from 'react'
import style from './Candidates.module.css';
import ipad from '../../Images/ipad.png'
import screen from '../../Images/screen.png'

const CandidatesScore = () => {
    return (
        <>
            <div className={style.main_container}>

                {/* left container */}

                <div className={style.left_container}>
                    <div className={style.heading}>
                        Candidate score against the JD
                    </div>
                    <div className={style.subheading}>
                        <p>
                            Upload the CV against a JD. Push a button, let the most advanced AI do its magic and give you a number on a score for 1 to 10 for the candidate against the JD in question
                        </p>
                    </div>
                    <div className={style.para}>
                        <p className={style.icon_container}>
                            <span>
                                <i class="fa-sharp fa-regular fa-circle-check"
                                    style={{
                                        color: "#00cc29",
                                        textAlign: "left",
                                        paddingRight: "10px "
                                    }}></i>
                            </span>

                            <span>
                                <b>2,500+ job boards:</b> Global, local and specialized free
                                and premium platforms integrated natively.
                            </span>
                        </p>
                    </div>

                    <div className={style.demo}>Book a demo
                        <i class="fa-solid fa-arrow-right"
                            style={{ padding: "20px" }}
                        ></i>
                    </div>
                </div>





                {/* right container */}
                <div className={style.right_container}>
                    <div className={style.ipad}>
                    </div>
                    <img src={ipad} alt="" />
                    <div className={style.screen}>
                        <img src={screen} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CandidatesScore