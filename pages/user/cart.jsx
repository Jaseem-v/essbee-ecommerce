import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'
import CartRow from '../../components/cart/CartRow'
import { discountPriceCalculator } from '../../components/utility'

export default function Cart() {
    const cart = useSelector((state) => state.cartReducer.cart)


    let total = cart.reduce((sum, el) => {
        const price = Math.round(discountPriceCalculator(el.product.discount, el.product.price))
        return sum + price * el.quantity
    }, 0)




    return (
        <div>
            <BreadCrumb />
            <div className="container">

                <section className="cart_wrapper">
                    {cart.length ?
                        <div className="row">
                            <div className="col-md-8">

                                <table className="cart-table">
                                    <thead>
                                        <tr>
                                            <th className="product-name">Img</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Total</th>
                                            <th className="product-remove">&nbsp;</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {cart.map((el, i) => (
                                            <CartRow cartItem={el.product} key={i} quantity={el.quantity} />
                                        ))
                                        }

                                    </tbody>
                                </table>


                            </div>

                            <div className="col-md-4">
                                <div className="cart__details">
                                    <div className="cart__title">
                                        Summary
                                    </div>

                                    <div className="cart__price-group">
                                        <h6 className='cart__sub-title'>Subtotal</h6>
                                        <h5>Rs {total}</h5>
                                    </div>
                                    <div className="cart__price-group">
                                        <h6 className='cart__sub-title'>Shipping</h6>
                                        <h5>Free</h5>
                                    </div>

                                    <hr className='cart__hr' />

                                    <div className="cart__discount">
                                        <h6 className='cart__sub-title'>Discount Code</h6>
                                        <input type="text" placeholder='Enter coupen' />
                                        <button className="cart__btn cart__btn--discount">
                                            Apply
                                        </button>
                                    </div>

                                    <hr className='cart__hr' />

                                    <div className="cart__price-group">
                                        <h6 className='cart__sub-title'>Total</h6>
                                        <h5>Rs {total}</h5>
                                    </div>

                                    <button className="cart__btn cart__btn--checkout">
                                        <Link href={"/user/checkout"}>
                                            <a >
                                                <span style={{ color: "#fff" }}>

                                                    Checkout
                                                </span>
                                            </a>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='cart__no-items'>
                            <div className="cart__no-items__content">
                                <h1>No items in your Cart</h1>
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
