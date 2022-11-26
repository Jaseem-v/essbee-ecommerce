import React from 'react'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation, Autoplay } from "swiper";


export default function Banner() {

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const navigationPagination = React.useRef(null)

  
    return (
        // < !--header ---- -->
        <header>
            {/* <div className="container"> */}
            <Swiper
                pagination={{ clickable: true, }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                loop
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >

                {[1, 2, 3, 4, 5, 6].map((el, i) => (
                    <SwiperSlide key={i}>
                        <img src={`/banner/banner_${el}.png`} />

                    </SwiperSlide>

                ))}



                <div className="swiper-button-next" ref={navigationNextRef}>
                    <span>
                        {'>'} </span>
                </div>
                <div className="swiper-button-prev" ref={navigationPrevRef}>
                    <span>
                        {'<'}
                    </span>
                </div>

            </Swiper>
            {/* </div> */}
            <div className="swiper-pagination" ref={navigationPagination}></div>
        </header >

        // <!-- --x - header---- -->
    )
}
