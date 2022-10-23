import { Grid } from '@mui/material'
import React, { useState } from 'react'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import SingleCategory from '../components/category/SingleCategory'

const jfu = [
    { id: 1, text: "Men's Fashion" },
    { id: 2, text: "Women's Fashion" },
    { id: 3, text: "Kids' Fashion" },
    { id: 4, text: "Mobiles" },
    { id: 5, text: "Electronic Accessories" },
    { id: 6, text: "Video Games" },
    { id: 7, text: "Fragrance" },
    { id: 8, text: "Skin Care" },
    { id: 9, text: "Makeup" },
    { id: 10, text: "Home & Kitchen" },
    { id: 11, text: "Laptops" },
    { id: 12, text: "Televisions" },
    // { id: 5, text: "home Baking" },
]
const electronics = [
    { id: "e1", text: "Bestsellers" },
    { id: "e2", text: "New arrivals" },
    { id: "e3", text: "MacBook" },
    { id: "e4", text: "Windows" },
    { id: "e5", text: "Powerful laptops" },
    { id: "e6", text: "Budget laptops" },
]

const category_list = [
    { category: "jsf", title: "Just for you" },
    { category: "electronics", title: "Electronics" },
    { category: "laptop", title: "Laptops & Accessories" },
    { category: "home", title: "Home & Kitchen" },
    { category: "men", title: "Men's Fashion" },
    { category: "tv", title: "TVs & Appliances" },
    { category: "beuty", title: "Beauty & Personal Care" },
    { category: "health", title: "Health & Nutrition" },
    { category: "office", title: "Office Supplies, Books & Media" },
    { category: "automotive", title: "Automotive" },
    { category: "baby", title: "Baby" }
]
export default function Category() {

    const [category, setCategory] = useState("jsf")

    const categorySwitch = (e) => {
        const attribute = e.target.getAttribute("data")
        setCategory(attribute)
    }

    const navigationDefault = ["Home", "Category"]

    return (
        <div>
            <BreadCrumb title="Category" navigation={navigationDefault} />

            <div className="container section-padding">
                <Grid container spacing={5}>
                    <Grid item xs={4} lg={3}>

                        {/* <div className="category__left"> */}
                        <ul className="category__list">
                            {
                                category_list.map((el, i) => (
                                    <li data={el.category} key={i} onClick={categorySwitch}>{el.title}</li>
                                ))
                            }
                        </ul>
                        {/* </div> */}
                    </Grid>
                    <Grid item xs={8} lg={9}>
                        <div className="category__right">
                            <Grid container spacing={5}>
                                {category === "jsf" &&
                                    jfu.map((el, i) =>
                                        <Grid item xs={6} md={4} lg={3} key={i}>
                                            <SingleCategory key={i} title={el.text} img={el.id} page={true} format="png" />
                                        </Grid>
                                    )
                                }
                                {category === "electronics" &&
                                    electronics.map((el, i) =>
                                        <Grid item xs={6} md={4} lg={3} key={i}>
                                            <SingleCategory key={i} title={el.text} img={el.id} page={true} format="png" />
                                        </Grid>
                                    )
                                }
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
