import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Product from '../product/Product';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

import "swiper/css/navigation";
import { Navigation } from "swiper";
import Link from 'next/link';

export default function SliderLayout({ title = "title", products }) {

    // const isLoading = useSelector((state) => state.products.isLoading)


    const [productsData, setProductsData] = useState([])
    const [isLoading, setIsLoading] = useState(false)



    return (
        <div className='sliderLayout'>

            <div className="sliderLayout__header">

                <h2 className="sliderLayout__title">{title}</h2>

                <div className="sliderLayout__more">
                    <Link href="/College/">
                        <a className="btn btn-primary">
                            See All <i className='fa fa-chevron-right'></i>
                        </a>
                    </Link>
                </div>

            </div>
            <div className="sliderLayout__slider">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    grabCursor={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 7,
                            spaceBetween: 10,
                        },
                    }}
                    // modules={[Pagination]}
                    className="mySwiper"
                    navigation={true} modules={[Navigation]}
                >

                    {!isLoading && products &&
                        products.map((el, i) => (
                            <SwiperSlide key={i} >
                                <Product el={el} isLoading={isLoading} />
                            </SwiperSlide>
                        ))

                    }

                </Swiper>
            </div>
        </div >
    )
}
