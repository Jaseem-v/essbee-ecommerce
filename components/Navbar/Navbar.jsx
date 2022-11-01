import React, { useEffect, useState } from 'react'
import styles from "../../styles/navbar.module.scss"
import Image from 'next/image'
import Link from "next/link"
import { useDispatch, useSelector } from 'react-redux'
import { addProductToStore } from '../../redux/action/reduxAction'
import productData from "../../data/products.json"

// const fetchProducts = async () => {
//   const res = await fetch(`http://localhost:8000/products`);
//   let product = await res.json();

//   return product
// };


export default function Navbar() {

  const cart = useSelector((state) => state.cartReducer.cart)
  const wishList = useSelector((state) => state.wishListReducer.wishlist)

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    dispatch(addProductToStore(productData.products))
  }, [])



  const cartItemCount = cart.length
  const wishlistItemCount = wishList.length



  return (
    // <!-- ---------nav-bar---------- -->
    <nav className={clientWindowHeight > 200 ? "navigation sticky" : "navigation "} id="navbar">
      <div className="container navigation__content">
        {/* <div className='d-flex navigation__search-logo-div'> */}
        <Link href="/" >
          <a className="navigation__logo">
            <img src="/new_logo-eb.png" alt="logo" />
          </a>
        </Link>


        <div className="navigation__items navigation__items--cat">
          <Link href="/category  ">
            <a className="navigation__link navigation__link--cat">
              <i className='fa fa-bars'></i>
              All categories
            </a>
          </Link>
        </div>

        <div className="navigation__search">
          <input type="search" name="search" className="navigation__search-field" placeholder="Enter your product name..." />
        </div>
        {/* </div> */}
        <div className="navigation__action">


          <div className="navigation__action--item d-md-block d-none">
            {/* <i className="fa fa-shopping-cart"></i> */}


            <Link href="/user/cart">

              <a >


                <svg className="mb-1 " width="20" height="20" viewBox="0 0 1078 1024" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M458.752 787.51c-53.895 0-102.4 43.116-102.4 102.4s43.116 102.4 102.4 102.4c53.895 0 102.4-43.116 102.4-102.4 0 0 0 0 0 0 0-59.284-48.505-102.4-102.4-102.4zM480.31 889.91c0 16.168-10.779 26.947-26.947 26.947s-26.947-10.779-26.947-26.947c0-16.168 10.779-26.947 26.947-26.947s26.947 10.779 26.947 26.947z" fill="rgb(126, 129, 140)" ></path>
                  <path d="M765.952 787.51c-53.895 0-102.4 43.116-102.4 102.4 0 53.895 43.116 102.4 102.4 102.4 53.895 0 102.4-43.116 102.4-102.4 0 0 0 0 0 0 0-59.284-43.116-102.4-102.4-102.4zM792.899 889.91c0 16.168-10.779 26.947-26.947 26.947s-26.947-10.779-26.947-26.947c0-16.168 10.779-26.947 26.947-26.947 0 0 0 0 0 0 16.168 0 26.947 10.779 26.947 26.947z" fill="rgb(126, 129, 140)" ></path>
                  <path d="M1040.815 216.226c-10.779-16.168-32.337-21.558-48.505-21.558h-754.526l-10.779-64.674c-5.389-21.558-16.168-37.726-37.726-43.116l-107.789-48.505c-21.558-5.389-43.116 0-48.505 21.558 0 0 0 0 0 0-5.389 21.558 0 37.726 21.558 48.505l102.4 43.116 118.568 571.284c5.389 26.947 32.337 48.505 59.284 48.505h592.842c21.558 0 37.726-16.168 37.726-37.726s-16.168-37.726-37.726-37.726c0 0 0 0 0 0h-576.674l-10.779-43.116h592.842c26.947 0 53.895-21.558 59.284-48.505l70.063-334.147c-5.389-21.558-10.779-37.726-21.558-53.895zM976.141 270.12l-64.674 307.2h-598.232l-64.674-307.2h727.579z" fill="rgb(126, 129, 140)">
                  </path></svg>
                Cart

                <div className="navigation__action--bubble">
                  {cartItemCount}
                </div>
              </a>
            </Link>
          </div>

          <div className="navigation__action--item d-md-block d-none">
            {/* <i className="fa fa-heart"></i> */}

            <Link href="/user/wishlist">

              <a >

                <svg className="mb-1" width="20" height="20" viewBox="0 0 1144 1024" xmlns="http://www.w3.org/2000/svg" ><path d="M578.259 993.882l-24.094-18.071c-289.129-198.776-530.071-385.506-530.071-626.447 0-108.424 54.212-210.824 144.565-271.059 72.282-48.188 156.612-60.235 240.941-42.165 60.235 12.047 120.471 48.188 162.635 90.353 60.235-60.235 144.565-96.376 228.894-96.376 0 0 0 0 0 0 174.682 0 319.247 144.565 319.247 319.247v0 0 0c0 72.282 0 289.129-518.024 626.447l-24.094 18.071zM343.341 120.471c-42.165 0-90.353 12.047-126.494 36.141-66.259 42.165-102.4 114.447-102.4 192.753 0 192.753 216.847 361.412 463.812 530.071 301.176-198.776 451.765-379.482 451.765-530.071v0c0-126.494-102.4-228.894-228.894-228.894 0 0 0 0 0 0-78.306 0-150.588 42.165-192.753 102.4l-36.141 60.235-36.141-60.235c-36.141-48.188-84.329-84.329-144.565-96.376-18.071 0-36.141-6.024-48.188-6.024z" fill="rgb(125, 128, 139)" ></path></svg>

                Wishlist

                <div className="navigation__action--bubble">
                  {wishlistItemCount}
                </div>
              </a>
            </Link>
          </div>

          <div className="navigation__action--item">

            <Link href="/user/login">

              <a >
                {/* <i className='fa fa-user'></i> */}


                <svg className="mb-1" width="20" height="20" viewBox="0 0 964 1024" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M786.071 995.208h-608.376c-90.353 0-168.659-72.282-168.659-168.659v-72.282c0-90.353 72.282-168.659 168.659-168.659h608.376c90.353 0 168.659 72.282 168.659 168.659v72.282c0 96.376-78.306 168.659-168.659 168.659zM177.694 681.984c-42.165 0-72.282 36.141-72.282 72.282v72.282c0 42.165 36.141 72.282 72.282 72.282h608.376c42.165 0 72.282-36.141 72.282-72.282v-72.282c0-42.165-36.141-72.282-72.282-72.282h-608.376z" fill="rgb(125, 128, 139)" ></path>
                  <path d="M478.871 572.235c-150.588 0-271.059-120.471-271.059-271.059s120.471-271.059 271.059-271.059 271.059 120.471 271.059 271.059-120.471 271.059-271.059 271.059zM478.871 120.471c-102.4 0-180.706 78.306-180.706 180.706s78.306 180.706 180.706 180.706 180.706-78.306 180.706-180.706-84.329-180.706-180.706-180.706z" fill="rgb(125, 128, 139)" ></path>
                </svg>


                Login

              </a>

            </Link>



            {/* Account */}
          </div>

        </div>
      </div>
      <div className="navigation__category">
        <div className="container">
          <div className="navigation__category--content">

            <ul className="navigation__list">
              <li className="navigation__items">
                <Link href="/shop/groceries" >
                  <a className="navigation__link">
                    Groceries
                  </a>
                </Link>

                <div className="navigation__sub-menu">
                  <div className="row">
                    <div className="col-lg-3">
                      <h5 className="navigation__sub-menu-title">
                        CATEGORIES
                      </h5>
                      <ul className="navigation__sub-menu-ul">
                        <li className='navigation__sub-menu--items'>
                          Ice cream & Pastry
                        </li>
                        <li className='navigation__sub-menu--items'>
                          Frozen Dairy

                        </li>
                        <li className='navigation__sub-menu--items'>
                          Ready Meals & Snacks

                        </li>
                        <li className='navigation__sub-menu--items'>
                          Burgers

                        </li>
                        <li className='navigation__sub-menu--items'>
                          Meat & Poultry

                        </li>
                        <li className='navigation__sub-menu--items'>
                          Fish & Seafood

                        </li>
                        <li className='navigation__sub-menu--items'>
                          Fruits & Vegetables
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-5">
                      <div className="navigation__sub-menu-brands-container">
                        <h5 className="navigation__sub-menu-title">
                          TOP BRANDS
                        </h5>
                        <div className="navigation__sub-menu-brands-grid">
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_sony.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_sony.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_sony.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_sony.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_sony.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_sony.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_sony.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_sony.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_sony.png" alt="" layout='fill' />
                          </div>

                        </div>
                      </div>

                    </div>

                    <div className="col-lg-4">
                      <div className="navigation__sub-menu-bannerImg position-relative">
                        <Image src="/categories/nav_img.jpg" alt="" layout='responsive' width="100" height="70" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="navigation__items">
                <Link href="/shop/groceries" >
                  <a className="navigation__link">
                    Men&apos;s Wear
                  </a>
                </Link>


                <div className="navigation__sub-menu">
                  <div className="row">
                    <div className="col-lg-3">
                      <h5 className="navigation__sub-menu-title">
                        CATEGORIES
                      </h5>
                      <ul className="navigation__sub-menu-ul">
                        <li className='navigation__sub-menu--items'>
                          Ice cream & Pastry
                        </li>
                        <li className='navigation__sub-menu--items'>
                          Frozen Dairy

                        </li>
                        <li className='navigation__sub-menu--items'>
                          Ready Meals & Snacks

                        </li>
                        <li className='navigation__sub-menu--items'>
                          Burgers

                        </li>
                        <li className='navigation__sub-menu--items'>
                          Meat & Poultry

                        </li>
                        <li className='navigation__sub-menu--items'>
                          Fish & Seafood

                        </li>
                        <li className='navigation__sub-menu--items'>
                          Fruits & Vegetables
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-5">
                      <div className="navigation__sub-menu-brands-container">
                        <h5 className="navigation__sub-menu-title">
                          TOP BRANDS
                        </h5>
                        <div className="navigation__sub-menu-brands-grid">
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_nav-Nike.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_nav-Nike.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_nav-Nike.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_nav-Nike.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_nav-Nike.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_nav-Nike.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_nav-Nike.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_nav-Nike.png" alt="" layout='fill' />
                          </div>
                          <div className='navigation__sub-menu-brands-img'>
                            <Image src="/brands/en_nav-Nike.png" alt="" layout='fill' />
                          </div>

                        </div>
                      </div>

                    </div>

                    <div className="col-lg-4">
                      <div className="navigation__sub-menu-bannerImg position-relative">
                        <Image src="/categories/nav_img.jpg" alt="" layout='responsive' width="100" height="70" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="navigation__items">
                <Link href="/shop/groceries" >
                  <a className="navigation__link">
                    Electronincs
                  </a>
                </Link></li>
              <li className="navigation__items">
                <Link href="/shop/groceries" >
                  <a className="navigation__link">
                    Mobiles
                  </a>
                </Link>
              </li>
              <li className="navigation__items">
                <Link href="/shop/groceries" >
                  <a className="navigation__link">
                    Lifestyle
                  </a>
                </Link>
              </li>
              <li className="navigation__items">
                <Link href="/shop/groceries" >
                  <a className="navigation__link">
                    Home & living
                  </a>
                </Link>
              </li>
              <li className="navigation__items">
                <Link href="/vendors/electronics" >
                  <a className="navigation__link">
                    vendors
                  </a>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>

    </nav>
    // {/* <!-- ---------nav-bar---------- --> */}
  )
}

