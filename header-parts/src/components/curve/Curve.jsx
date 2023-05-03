import laptop from '../../Images/MacBook Pro 16.png';
import screen from '../../Images/laptop.png';
import style from './Curve.module.css'
import React, { useState } from "react";
import videoStyle from './Video.module.css';
import video1 from '../../Images/RareTalent_video.mp4';
import phone from '../../Images/phone_new.png';

function Curve(props) {

    // <img className={style.phone_base} src={phone} alt="laptop" />



    return (
        <>
            <div className={style.curve}>
                <div className={style.white_curve}>
                    <div className={style.container}>
                        <img className={style.laptop_base} src={laptop} alt="laptop" />


                        <div className={style.inner_container}>



                            {/* video starts */}

                            {props.showVideo ? (
                                <div className={videoStyle.video_container} onClick={() => props.setShowVideo(!props.showVideo)}>
                                    <video src={video1} autoPlay loop muted />

                                    <button
                                        className={videoStyle.close_button}
                                        onClick={() => props.setShowVideo(!props.showVideo)}>

                                    </button>
                                </div>
                            ) : null}

                            {/* video ends */}



                        </div>
                    </div>



                    <div className={style.mobileContainer}>
                        <img className={style.phone_base} src={phone} alt="phone" />

                        {props.showVideo ? (
                            <div className={videoStyle.video_container} onClick={() => props.setShowVideo(!props.showVideo)}>
                                <video src={video1} autoPlay loop muted />

                                <button
                                    className={videoStyle.close_button}
                                    onClick={() => props.setShowVideo(!props.showVideo)}>

                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Curve;