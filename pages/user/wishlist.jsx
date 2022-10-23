import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'
import CartRow from '../../components/cart/CartRow'
import { discountPriceCalculator } from '../../components/utility'
import WishListRow from '../../components/wishlist/WishListRow'

export default function WishList() {
    const wishList = useSelector((state) => state.wishListReducer.wishlist)

    // console.log(cart);

    // let total = cart.reduce((sum, el) => {
    //     const price = Math.round(discountPriceCalculator(el.product.discount, el.product.price))
    //     return sum + price * el.quantity
    // }, 0)


const wishlistBreadNav = ["Home", "WishList"]

    return (
        <div>
                <BreadCrumb navigation={wishlistBreadNav} title="WishList"/>
            <div className="container wishlist">
                    <section className="cart_wrapper">
                        {wishList.length ?
                            <div className="row">
                                <div className="col-md-12">
                                    {/* {cart.length ? */}
                                    <table className="cart-table">
                                        <thead>
                                            <tr>
                                                <th className="product-name" >Img</th>
                                                <th className="product-name" >Product Name</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">&nbsp;</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {wishList && wishList.map((el, i) => (
                                                <WishListRow cartItem={el} key={i} />
                                            ))
                                            }

                                        </tbody>
                                    </table>

                                    {/* :
                            <h1>No items</h1>
                        } */}
                                </div>


                            </div>
                            :
                            <div className='cart__no-items'>
                                <div className="cart__no-items__content">
                                    <h1>No items in your Wishlist</h1>
                                    <Link href="/" >
                                        <a className='btn'>
                                            Start Shopping
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        }

                    </section>
            </div>
        </div>

    )
}
