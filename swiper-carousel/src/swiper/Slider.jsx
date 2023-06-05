import styles from './Swiper.module.css';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 250,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://hellogiggles.com/wp-content/uploads/sites/7/2017/01/04/La-Casa-di-Topolino-3b.jpg?quality=82&strip=1&resize=640%2C360" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://static01.nyt.com/images/2022/12/21/multimedia/00MickeyMouse-01-1-da79/00MickeyMouse-01-1-da79-facebookJumbo-v3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/b0d67f8cf4154993b55eaefd00bbc16c_9366/adidas_x_Disney_Mickey_Mouse_Jogger_Red_HR9486_01_laydown.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mickey_Mouse_head_and_ears.svg/2000px-Mickey_Mouse_head_and_ears.svg.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mickey_Mouse_head_and_ears.svg/2000px-Mickey_Mouse_head_and_ears.svg.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mickey_Mouse_head_and_ears.svg/2000px-Mickey_Mouse_head_and_ears.svg.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mickey_Mouse_head_and_ears.svg/2000px-Mickey_Mouse_head_and_ears.svg.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mickey_Mouse_head_and_ears.svg/2000px-Mickey_Mouse_head_and_ears.svg.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mickey_Mouse_head_and_ears.svg/2000px-Mickey_Mouse_head_and_ears.svg.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider