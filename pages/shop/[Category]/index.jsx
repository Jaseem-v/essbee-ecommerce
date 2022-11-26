import { Stack } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import { useSelector } from 'react-redux';
import Banner from '../../../components/banner/Banner';
import FilterBox from '../../../components/fliterBox/FilterBox';
import Product from '../../../components/product/Product';
import SliderLayout from '../../../components/sliderLayout/SliderLayout';
import { randomProducts } from '../../../components/utility';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

const brands = [
    "apple", "asus", "acer", "samsung", "hp", "dell"
]
const ram = [
    "2GB", "4GB", "8GB", "16GB", "32Gb", "64GB", "128GB",
]
const resolution = [
    "1024 x 600", "1024 x 768", "1280 x 720", "1280 x 800", "1366 x 768",
]
const color = [
    "red", "green", "blue", "violet", "orange", "indigop", "grey"
]

const filterApllied = [
    "mobile", "samsung", "ram", "watch"
]

const bp = {
    640: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 10,
    },
    1200: {
        slidesPerView: 4,
        spaceBetween: 10,
    },
}
function valuetext(value) {
    return `${value}°C`;
}

export default function ShopCategory() {

    const products = useSelector((state) => state.products)
    const [value, setValue] = useState([2000, 5700]);
    const [isFilterOpen, setisFilterOpen] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const filterOpenHandler = () => {
        setisFilterOpen(true)
    }
    const filterCloseHandler = () => {
        setisFilterOpen(false)
    }


    return (
        <div className="container">

            <Banner />

            <div className='row'>
                <div className="col-md-3">
                    <div className={isFilterOpen ? "shop__filter-div mt-3 active" : "shop__filter-div mt-3"}>
                        <div className="shop__filter-head d-md-none">
                            <h4>product filter</h4>

                            <i onClick={filterCloseHandler} className="fa fa-times"></i>

                        </div>
                        <div className="shop__filter-content">
                            <FilterBox data={brands} title={"brand"} />
                            <FilterBox data={ram} title={"ram"} />
                            <FilterBox data={resolution} title={"resolution"} />
                            <FilterBox data={color} title={"colour"} />
                            <FilterBox title={"Price"} >
                                {/* <div className="shop__filter-price">
                                    <input type="number" value={100} name="minPrice" id="minPrice" />
                                    <h1>-</h1>
                                    <input type="number" value={1000} name="minPrice" id="minPrice" />
                                    <input type="submit" className="btn" value=">" />
                                </div> */}

                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    // color="s"
                                    max={10000}
                                    min={100}
                                />
                            </FilterBox>
                        </div>
                    </div>
                </div>
                <div className="col-md-9 ">
                    {/* <div className="shop__banner position-relative">
                        <img src="/shopbanner.jpg" />
                    </div> */}
                    {/* 

                    <div className="mt-5">
                        {products &&
                            <SliderLayout title='Best Seller Items' bp={bp} products={randomProducts(products, 15)} more={false} />
                        }
                    </div> */}

                    <Stack direction="row" alignItems="center" justifyContent="space-between" className='vendor-details__heading mt-5'>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={5}>

                            <h2 className="sliderLayout__title d-none d-md-block">36 Products found</h2>
                            <h2 className="sliderLayout__title d-md-none" onClick={filterOpenHandler}><i className='fa fa-sliders'></i> Filter</h2>

                            <div className="shop__filter-applied-box">
                                <ul className="shop__filter-applied-items">

                                    {filterApllied.map((el, i) => (
                                        <li key={i}>
                                            <h6>
                                                {el}
                                            </h6>
                                            <i className='fa fa-times'></i>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </Stack>
                        <select name="sort" id="sort" className="vendor-details__sort-select">
                            <option value="latest">Sort by latest</option>
                            <option value="latest">Sort by popularity</option>
                            <option value="latest">Sort by average rating</option>
                            <option value="latest">Sort by price: low to high</option>
                            <option value="latest">Sort by price: high to low</option>
                        </select>
                    </Stack>

                    <div className="row mt-5">
                        {products && randomProducts(products, 12).map((el, i) => {

                            return <div className="col-md-3 col-6" key={i}>
                                <Product el={el} />
                            </div>

                        })}

                    </div>
                    {/* <!-- -----pagination------- --> */}
                    <div className="col-md-12 col-sm-12 col-lg-12 mb-5">
                        {/* <div className="pagination text-center">
                            <a href="#" className="prev pagination__numbers">
                                <i className="bi bi-chevron-double-left"></i>
                            </a>
                            <span className="pagination__numbers current" aria-current="page">1</span>
                            <a href="#" className="pagination__numbers">2</a>
                            <a href="#" className="pagination__numbers">3</a>
                            <a href="#" className="pagination__numbers">4</a>
                            <h1>.</h1>
                            <h1>.</h1>
                            <h1>.</h1>
                            <h1>.</h1>
                            <a href="#" className="pagination__numbers">17</a>

                            <a href="#" className="next pagination__numbers">
                                <i className="bi bi-chevron-double-right"></i>
                            </a>

                        </div> */}
                        <div className="d-flex align-items-center justify-content-center py-5">
                            <button className="btn btn--slider">
                                Load more
                            </button>
                        </div>
                    </div>
                    {/* <!-- --xx---pagination--xx----- --> */}
                </div>
            </div>
        </div>

    )
}

