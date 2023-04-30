import React from 'react'
import style from './Hero_section.module.css';
import Curve from '../curve/Curve';


const Hero_section = () => {
    return (
        <>
            <div className={style.hero_section_main}>
                <div className={style.hero_section_content}>
                    Cut down your hiring time <br />
                    significantly !
                </div>
                <p className={style.hero_section_content2}>
                    With the most advanced generative AI engine behind the scenes, writing JD's and filtering candidates is a breeze !
                </p>


                {/* button section */}
                <div className={style.hero_section_button_section}>
                    <div className={style.get_started}>Get Started</div>
                    <div className={style.watch_video}>Watch Video </div>
                </div>

                {/* <Curve /> */}
            </div>
        </>
    )
}

export default Hero_section