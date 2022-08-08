import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import AdImageBanner from '../components/adImage/AdImageBanner'
import Banner from '../components/banner/Banner'
import Category from '../components/category/Category'
import SliderLayout from '../components/sliderLayout/SliderLayout'
import { useSelector, useDispatch } from 'react-redux'
import { updateStore } from '../redux/reducer/productsReducer'

export default function Home({ allProducts }) {

  const products = useSelector((state) => state.products.value)
  // const isLoading = useSelector((state) => state.products.isLoading)
  const dispatch = useDispatch();

 

  useEffect(() => {
    dispatch(updateStore(allProducts));
  }, [allProducts])




  const randomProducts = ([...arr], n = 1) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr.slice(0, n);
  };


  console.log("products", products);




  return (

    <div >
      <div className="banner_container">
        <Banner />
        <img src="assets/banner_side_2.gif" alt="banner2" className='banner_side_img' />

      </div>
      <Category />
      <div className="products">
        <div className="container">
          {products &&

            <SliderLayout title='Best Offers & Recommend for You' products={randomProducts(products, 15)} />
          }
        </div>
      </div>

      <AdImageBanner img={1} />

      <div className="products kitchen_stores">
        <div className="container">
          {products &&

            <SliderLayout title='Kitchen Stores' products={randomProducts(products, 15)} />
          }
        </div>
      </div>

      <AdImageBanner img={2} />

      <div className="products kitchen_stores">
        <div className="container">

          {products &&
            <SliderLayout title='Deals On Mobiles' products={randomProducts(products, 15)} />
          }
        </div>
      </div>

    </div >

  )
}





export const getStaticProps = async () => {

  // Fetching data from jsonplaceholder.
  const res = await fetch(process.env.DB_HOST);
  let allProducts = await res.json();


  // Sending fetched data to the page component via props.
  return {
    props: {
      allProducts
    }
  }
}