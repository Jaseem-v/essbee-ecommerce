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
        { id: 1, text: "Choclates" },
        { id: 2, text: "personal care" },
        { id: 3, text: "Kitchen " },
        { id: 4, text: "fridge" },
        { id: 5, text: "smartphone" },
        { id: 6, text: "computer Devices" },
        { id: 7, text: "Television" },
        { id: 8, text: "home Baking" },
        { id: 1, text: "home Baking" },
        { id: 2, text: "home Baking" },
        { id: 3, text: "home Baking" },
        { id: 4, text: "home Baking" },
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
                        slidesPerView: 12,
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