import React from 'react'
import style from './Workflow.module.css';
import ipad from '../../Images/ipad.png'
import screen from '../../Images/dashboard.png'

const Workflow = () => {
    return (
        <>
            <div className={style.main_container}>

                {/* left container */}

                <div className={style.left_container}>
                    <div className={style.heading}>
                        Workflow that connects all
                    </div>
                    <div className={style.subheading}>
                        <p>
                        Brings together companies, recruiters, candidates in the same workflow. Today the company to recruiter flow is inefficient with many manual processes.
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
                            <b>Integrated workflow :</b> Integrated workflow: With our integrated workflow, days lost in emails not seen, calls not picked will be a thing of past.
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

export default Workflow