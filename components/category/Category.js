import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SingleCategory from './SingleCategory';
import axios from 'axios';

// const category_data = [
//     {

//     }
// ]




function Category() {
    const [data, setData] = useState([
        { id: 1, text: "Computers" },
        { id: 2, text: "Television" },
        { id: 3, text: "Mobilephone" },
        { id: 4, text: "fridge" },
        { id: 5, text: "Camera" },
        { id: 6, text: "Home theater" },
        { id: 7, text: "Gamestation" },
        { id: 8, text: "AC" },
        { id: 9, text: "Speaker" },
        { id: 10, text: "Watches" },
        { id: 11, text: "Trimmer" },
        { id: 12, text: "Lamps" },
        // { id: 5, text: "home Baking" },
    ])


    return (
        <div>
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                breakpoints={{
                    640: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 10,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 10,
                        spaceBetween: 10,
                    },
                }}




            >
                {
                    data.map((el, i) => {

                        return (
                            <SwiperSlide key={i}>
                                <SingleCategory title={el.text} img={el.id} />
                            </SwiperSlide>
                        )

                    }

                    )
                }


            </Swiper></div>
    )
}


export default Category