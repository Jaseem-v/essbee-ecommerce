import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ShopCard() {
    return (
        <div className="vendor__single-item ">
            <div className="vedor__img position-relative w-100">
                <Image src="/clothes-shop.jpg" layout='responsive' width="100" height="100" />
            </div>
            <h2 className="vendor__title">Apple Store</h2>
            <h5 className="vendor__details">1418 River Drive , Suite cotton hall , CA , USA</h5>
            <h5 className="vendor__details">Sales@gmail.com</h5>
            <h5 className="vendor__details">+91 12345 67890</h5>

            <Link href="/vendorDetails/vendor">
                <a className="btn btn--store">
                    Visit Store
                </a>
            </Link>
        </div>
    )
}
