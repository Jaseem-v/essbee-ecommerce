import React from 'react'
import styles from "../../styles/navbar.module.scss"
import Image from 'next/image'
import Link from "next/link"

export default function Navbar() {
  return (
    // <!-- ---------nav-bar---------- -->
    <nav className="navigation " id="navbar">
      <div className="container navigation__content">
        <Link href="/" >
          <a className="navigation__logo">
            <img src="/eb_logo.png" alt="logo" />
          </a>
        </Link>
        <ul className="navigation__list">
          <li className="navigation__items">
            <Link href="/" >
              <a className="navigation__link">
                Home
              </a>
            </Link>
          </li>
          <li className="navigation__items">
            <Link href="products.html" >
              <a className="navigation__link">
                Products
              </a>
            </Link>
          </li>
          <li className="navigation__items">
            <Link href="about.html" >
              <a className="navigation__link">
                About Us
              </a>
            </Link></li>
          <li className="navigation__items">
            <Link href="contact.html" >
              <a className="navigation__link">
                Become a Seller
              </a>
            </Link>
          </li>

        </ul>

        <div className="navigation__search">
          <input type="search" name="search" className="navigation__search-field" placeholder="Enter your product name..." />
        </div>
        <div className="navigation__action">
          <div className="navigation__action--item">
            <i className='fa fa-user'></i>
            {/* Account */}
          </div>

          <div className="navigation__action--item">
            <i className="fa fa-shopping-cart"></i>
            {/* Cart */}

            <div className="navigation__action--bubble">
              1
            </div>
          </div>

          <div className="navigation__action--item">
            <i className="fa fa-heart"></i>
            {/* Wishlist */}

            <div className="navigation__action--bubble">
              1
            </div>
          </div>

        </div>
      </div>
      <div className="navigation__category">
        <div className="container">
          <div className="navigation__category--content">
            <div className="navigation__items">
              <a className="navigation__link navigation__link--cat">
                <i className='fa fa-bars'></i>
                All categories
              </a>
            </div>
            <ul className="navigation__list">
              <li className="navigation__items">
                <Link href="/" >
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
                          <img src="brands/en_sony.png" alt="" />
                          <img src="brands/en_sony.png" alt="" />
                          <img src="brands/en_sony.png" alt="" />
                          <img src="brands/en_sony.png" alt="" />
                          <img src="brands/en_sony.png" alt="" />
                          <img src="brands/en_sony.png" alt="" />
                          <img src="brands/en_sony.png" alt="" />
                          <img src="brands/en_sony.png" alt="" />
                          <img src="brands/en_sony.png" alt="" />
                        </div>
                      </div>

                    </div>

                    <div className="col-lg-4">
                      <div className="navigation__sub-menu-bannerImg">
                        <img src="categories/nav_img.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="navigation__items">
                <Link href="products.html" >
                  <a className="navigation__link">
                    Men's Wear
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
                          <img src="brands/en_nav-Nike.png" alt="" />
                          <img src="brands/en_nav-Nike.png" alt="" />
                          <img src="brands/en_nav-Nike.png" alt="" />
                          <img src="brands/en_nav-Nike.png" alt="" />
                          <img src="brands/en_nav-Nike.png" alt="" />
                          <img src="brands/en_nav-Nike.png" alt="" />
                          <img src="brands/en_nav-Nike.png" alt="" />
                          <img src="brands/en_nav-Nike.png" alt="" />
                          <img src="brands/en_nav-Nike.png" alt="" />
                        </div>
                      </div>

                    </div>

                    <div className="col-lg-4">
                      <div className="navigation__sub-menu-bannerImg">
                        <img src="categories/nav_img.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="navigation__items">
                <Link href="about.html" >
                  <a className="navigation__link">
                    ELECTRONICS
                  </a>
                </Link></li>
              <li className="navigation__items">
                <Link href="contact.html" >
                  <a className="navigation__link">
                    MOBILES
                  </a>
                </Link>
              </li>
              <li className="navigation__items">
                <Link href="contact.html" >
                  <a className="navigation__link">
                    LIFESTYLES
                  </a>
                </Link>
              </li>
              <li className="navigation__items">
                <Link href="contact.html" >
                  <a className="navigation__link">
                    HOME & LIVING
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
