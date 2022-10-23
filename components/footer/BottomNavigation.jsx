import Link from 'next/link'
import React from 'react'

export default function BottomNavigation() {
    return (
        <div className="bottom-navigation position-realative">

            <nav className="nav nav--icons">
                <ul>
                    <li>
                        <Link href="/">
                            <a >
                                <svg className="icon icon-home" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="currentColor" d="M21.6 8.2l-9-7c-0.4-0.3-0.9-0.3-1.2 0l-9 7c-0.3 0.2-0.4 0.5-0.4 0.8v11c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-11c0-0.3-0.1-0.6-0.4-0.8zM14 21h-4v-8h4v8zM20 20c0 0.6-0.4 1-1 1h-3v-9c0-0.6-0.4-1-1-1h-6c-0.6 0-1 0.4-1 1v9h-3c-0.6 0-1-0.4-1-1v-10.5l8-6.2 8 6.2v10.5z"></path>
                                </svg>
                                <span>Home</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/category">
                            <a >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 122.88 121.78"><path d="M6.91,0H49.79a6.86,6.86,0,0,1,5.34,2.55A6.37,6.37,0,0,1,56.29,4.6a6.61,6.61,0,0,1,.41,2.31V49.6a7,7,0,0,1-2.13,5,7,7,0,0,1-4.78,1.94H6.91A6.73,6.73,0,0,1,4.37,56,6.78,6.78,0,0,1,.58,52.33,6.62,6.62,0,0,1,0,49.6V6.91A7,7,0,0,1,1.71,2.37L2,2.09A7.1,7.1,0,0,1,4.06.63,7,7,0,0,1,6.91,0ZM73.09,65.26H116a6.87,6.87,0,0,1,3,.67,7,7,0,0,1,2.38,1.88,6.77,6.77,0,0,1,1.16,2,6.66,6.66,0,0,1,.41,2.32v42.69a6.82,6.82,0,0,1-.56,2.69,7,7,0,0,1-1.57,2.28,6.83,6.83,0,0,1-2.22,1.43,6.72,6.72,0,0,1-2.56.51H73.09a7,7,0,0,1-2.55-.5,6.85,6.85,0,0,1-2.2-1.41,7.09,7.09,0,0,1-1.59-2.28,6.76,6.76,0,0,1-.57-2.72V72.18a6.67,6.67,0,0,1,.45-2.43,7,7,0,0,1,1.25-2.12l.28-.28a7,7,0,0,1,2.07-1.45,6.83,6.83,0,0,1,2.86-.64ZM116,72.15H73.09l0,0v42.72c3.68,0,42.89,0,42.93,0,0-3.6,0-42.7,0-42.72ZM6.91,65.26H49.79a6.86,6.86,0,0,1,5.34,2.55,6.37,6.37,0,0,1,1.16,2,6.66,6.66,0,0,1,.41,2.32v42.69a6.82,6.82,0,0,1-.56,2.69,6.69,6.69,0,0,1-1.57,2.28,7,7,0,0,1-4.78,1.94H6.91a6.92,6.92,0,0,1-2.54-.5,6.79,6.79,0,0,1-2.21-1.41,6.91,6.91,0,0,1-1.58-2.28A6.61,6.61,0,0,1,0,114.87V72.18a6.89,6.89,0,0,1,.45-2.43,7.05,7.05,0,0,1,1.26-2.12L2,67.35A6.89,6.89,0,0,1,4.06,65.9a6.82,6.82,0,0,1,2.85-.64Zm42.88,6.89H6.91l0,0,0,42.72c3.67,0,42.89,0,42.92,0,0-3.6,0-42.7,0-42.72ZM73.09,0H116a6.87,6.87,0,0,1,3,.67,7,7,0,0,1,2.38,1.88,6.77,6.77,0,0,1,1.16,2.05,6.61,6.61,0,0,1,.41,2.31V49.6a6.83,6.83,0,0,1-.56,2.7,7.09,7.09,0,0,1-1.57,2.28A7,7,0,0,1,118.53,56a6.91,6.91,0,0,1-2.56.51H73.09A6.78,6.78,0,0,1,70.54,56a7,7,0,0,1-2.2-1.4,7.09,7.09,0,0,1-1.59-2.28,6.78,6.78,0,0,1-.57-2.73V6.91a6.66,6.66,0,0,1,.45-2.42,6.91,6.91,0,0,1,1.25-2.12l.28-.28A7.19,7.19,0,0,1,70.23.63,7,7,0,0,1,73.09,0ZM116,6.89H73.09l0,0V49.63c3.68,0,42.89,0,42.93,0,0-3.6,0-42.71,0-42.72Zm-66.18,0H6.91l0,0,0,42.72c3.67,0,42.89,0,42.92,0,0-3.6,0-42.71,0-42.72Z" /></svg>
                                <span>Category</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/user/wishlist">
                            <a >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" /></svg>
                                <span>WishList</span>
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/user/cart">
                            <a >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.53 7l-.564 2h-15.127l-.839-2h16.53zm-14.013 6h12.319l.564-2h-13.722l.839 2zm5.983 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" /></svg>
                                <span>cart</span>
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/user/login">
                            <a >
                                <svg className="icon icon-profile" viewBox="0 0 24 24" width="24" height="24">
                                    <g fill="currentColor">
                                        <path d="M16 14h-8c-2.8 0-5 2.2-5 5v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2c0-2.8-2.2-5-5-5z"></path>
                                        <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zM12 4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"></path>
                                    </g>
                                </svg>
                                <span>Profile</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}
