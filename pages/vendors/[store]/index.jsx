import { Slider } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import FilterBox from '../../../components/fliterBox/FilterBox'
import ShopCard from '../../../components/vendor/ShopCard'


function valuetext(value) {
    return `${value}°C`;
}
export default function Vendors() {

    const [value, setValue] = useState([10, 100]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="vendor__aside py-5">
                        <div className="search__box search__box--page">
                            <div className="search__bottom">
                                <input type="text" id="search-doctor"
                                    placeholder="Search shop" />
                                <input type="text" id="drop-down" placeholder="Location*" />
                                <button className="btn w-100">
                                    Search
                                </button>
                            </div>


                        </div>
                        <div className="mt-5">
                            <FilterBox title={"KM"} >
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
                                    max={100}
                                    min={10}
                                />
                            </FilterBox>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="vendor__shops section-padding py-5">
                        <div className="row">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,].map(e => {

                                return (

                                    <div className="col-md-3" key={e}>
                                        <ShopCard />
                                    </div>
                                )
                            })

                            }
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
