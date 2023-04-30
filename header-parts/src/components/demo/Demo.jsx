import React from 'react'
import demo_vector from '../../Images/demo_vector.jpg'
import style from './demo.module.css';


const Demo = () => {
    return (
        <>
            
            <div className={style.demo_container}>
                <div className={style.demo_left}>
                    <div className={style.heading}>
                        Lets Schedule Your Demo
                    </div>
                    <div className={style.subheading}>
                        Just Answer a few simple questions so we can personalize the right experience for you.
                    </div>
                    <div className={style.input_boxes}>
                        <input type="text" placeholder='Enter your Name' />
                        <input type="email" placeholder='Enter your Email Address' />
                    </div>
                    <button className={style.request_demo_button}>
                        Request A Demo 
                    </button>

                </div>
                <div className={style.demo_right}>
                    <img src={demo_vector} alt="vector_img" />
                </div>
            </div>
        </>
    )
}

export default Demo