import React from 'react'
import style from './Customer.module.css';
// import Curve from '../curve/Curve';
import avatar1 from '../../Images/Testimonial/Avatar Image.png'
import avatar2 from '../../Images/Testimonial/Avatar Image2.png'
import avatar3 from '../../Images/Testimonial/Avatar Image3.png'


const CustomerSlider = () => {
    return (
        <>
            <div className={style.main_container}>
                <div className={style.heading}>Customer Testimonials</div>
                <div className={style.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

                {/* slider */}
                <div className={style.slider_container}>
                    <div className={style.slider_left_button}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>

                    <div className={style.main_box}>
                        <div className={style.star_section}>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>


                        </div>
                        <div className={style.para}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                        </div>

                        <div className={style.flex_container}>
                            <div className={style.pic_section}>
                                <img src={avatar1} alt="avatar1" />
                            </div>
                            <div>
                                <div className={style.names}>Sunaina Gupta</div>
                                <div className={style.profession}>Software Developer</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.main_box_white}>
                        <div className={style.star_section}>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>


                        </div>
                        <div className={style.para}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                        </div>

                        <div className={style.flex_container}>
                            <div className={style.pic_section}>
                                <img src={avatar2} alt="avatar2" />
                            </div>
                            <div>
                                <div className={style.names}>Rahul Mehra</div>
                                <div className={style.profession}>Frontend Developer</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.main_box}>
                        <div className={style.star_section}>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>


                        </div>
                        <div className={style.para}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                        </div>

                        <div className={style.flex_container}>
                            <div className={style.pic_section}>
                                <img src={avatar3} alt="avatar3" />
                            </div>
                            <div>
                                <div className={style.names}>Satyam Jha</div>
                                <div className={style.profession}>Developer</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.slider_right_button}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CustomerSlider