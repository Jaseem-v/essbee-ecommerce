import { Slider, Stack } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FilterBox from '../../../components/fliterBox/FilterBox'
import Product from '../../../components/product/Product'
import SliderLayout from '../../../components/sliderLayout/SliderLayout'
import { randomProducts } from '../../../components/utility'

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
export default function VendorDetails() {

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
        <div className="vendor-details">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <aside className="vendor-details__aside">
                            <div className="vendor-details__side-box">
                                <Image src="/shop-img.jpg" alt="product" layout='responsive' width="100" height="100" />

                                <div className="vendor-details__shop-detail">
                                    <h3 className="vendor-details__shop-name">
                                        DIGITALWORLD US
                                    </h3>

                                    <p className='paragraph mt-4'>
                                        <strong>Digiworld US,</strong>  New York’s no.1 online retailer was established in May 2012 with the aim and vision to become the one-stop shop for retail in New York with implementation of best practices both online
                                    </p>
                                    <p className='paragraph'>
                                        <strong>Address :- </strong>   325 Orchard Str, New York, NY 10002
                                    </p>


                                    <p className='paragraph'>
                                        <strong>Mobile :- </strong>   +91 12345 67890
                                    </p>

                                    <ul className="media__social mt-0">
                                        <li className="media__social-item">
                                            <a href="#/" target="_blank">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="media__social-item"> <a href="#/" target="_blank">
                                            <i className="fa fa-twitter"></i>
                                        </a></li>
                                        <li className="media__social-item"> <a href="#/" target="_blank">
                                            <i className="fa fa-instagram"></i>
                                        </a></li>
                                        <li className="media__social-item"> <a href="#/" target="_blank">
                                            <i className="fa fa-linkedin"></i>
                                        </a></li>

                                    </ul>

                                </div>
                            </div>

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

                        </aside>

                    </div>
                    <div className="col-md-9">

                        <div className="mt-5">
                            {products &&
                                <SliderLayout title='Best Seller items' bp={bp} products={randomProducts(products, 15)} more={false} />
                            }
                        </div>

                        <Stack direction="row" alignItems="center" justifyContent="space-between" className='vendor-details__heading mt-5'>

                            <h2 className="sliderLayout__title">36 Products found</h2>
                            <h2 className="sliderLayout__title d-md-none" onClick={filterOpenHandler}><i className='fa fa-sliders'></i> Filter</h2>

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
                            <div className="pagination text-center">
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

                            </div>
                        </div>
                        {/* <!-- --xx---pagination--xx----- --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
