import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

import BreadCrumb from '../../components/breadcrumb/BreadCrumb'
import { discountPriceCalculator } from '../../components/utility'
const navigationDefault = ["Home", "User", "Checkout"]

export default function Checkout() {

    const cart = useSelector((state) => state.cartReducer.cart)

    let total = cart.reduce((sum, el) => {
        const price = Math.round(discountPriceCalculator(el.product.discount, el.product.price))
        return sum + price * el.quantity
    }, 0)

    return (
        <div>
            <BreadCrumb title="Checkout" navigation={navigationDefault} />
            <div className="container">
                <div className="section-padding">
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={5}>
                                <Grid item xs={12} md={6}>
                                    <div className="checkout__grp">
                                        <h1 className="checkout__label">First Name</h1>
                                        <input type="text" className='checkout__input' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="checkout__grp">
                                        <h1 className="checkout__label">Last Name</h1>
                                        <input type="text" className='checkout__input' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="checkout__grp">
                                        <h1 className="checkout__label">Email</h1>
                                        <input type="text" className='checkout__input' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="checkout__grp">
                                        <h1 className="checkout__label">Phone Number</h1>
                                        <input type="text" className='checkout__input' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="checkout__grp">
                                        <h1 className="checkout__label">Address</h1>
                                        <input type="text" className='checkout__input' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="checkout__grp">
                                        <h1 className="checkout__label">Country</h1>
                                        <input type="text" className='checkout__input' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="checkout__grp">
                                        <h1 className="checkout__label">PostCode / Zip</h1>
                                        <input type="text" className='checkout__input' />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="checkout__grp">
                                        <h1 className="checkout__label">Town / City</h1>
                                        <input type="text" className='checkout__input' />
                                    </div>
                                </Grid>

                            </Grid>

                            <h1 className="checkout__title mt-5">
                                Order
                            </h1>

                            {cart.map((el, i) => (
                                <div className="cart-table-prd mt-5" key={i}>
                                    <div className="cart-table-prd-image">
                                        <a href="course-single.html">
                                            <img src={el.product.thumbImage[0]} className="img-fluid"
                                                alt="" /></a>
                                    </div>
                                    <div className="cart-table-prd-name">
                                        <h2><a href="course-single.html">{el.product.name}</a></h2>
                                    </div>
                                    <h3 className="cart-table-prd-price"><b> Rs {el.quantity * Math.round(discountPriceCalculator(el.product.discount, el.product.price))}</b></h3>
                                </div>
                            ))}
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div>



                                <h1 className="checkout__title">
                                    Payment Method
                                </h1>

                                <div className="checkout__payment">

                                    <ul className="checkout__payment-list">
                                        <li className="checkout__payment-items">
                                            <label htmlFor="credit-card"
                                                className="checkout__payment-head checkout__label-text">
                                                <div className="d-flex align-items-center gap-3">
                                                    <input type="radio" name="credit-card" id="credit-card" />
                                                    <img src="/payment/card-default.svg"
                                                        alt="debit-card.svg" className="checkout__payment-img" />
                                                    Credit / Debit Card
                                                </div>
                                                <ul className="d-flex align-items-center gap-1">
                                                    <img src="/payment/card-mastercard.svg"
                                                        alt="debit-card.svg" className="checkout__payment-img" />

                                                    <img src="/payment/card-visa.svg" alt="debit-card.svg"
                                                        className="checkout__payment-img" />
                                                    <img src="/payment/card-discover.svg"
                                                        alt="debit-card.svg" className="checkout__payment-img" />

                                                    <img src="/payment/card-dinersclub.svg"
                                                        alt="debit-card.svg" className="checkout__payment-img" />
                                                    <img src="/payment/card-amex.svg" alt="debit-card.svg"
                                                        className="checkout__payment-img" />


                                                    <img src="/payment/card-rupay.svg"
                                                        alt="debit-card.svg" className="checkout__payment-img" />

                                                </ul>
                                            </label>
                                        </li>
                                        <li className="checkout__payment-items">
                                            <label htmlFor="upi" className="checkout__payment-head checkout__label-text">
                                                <div className="d-flex align-items-center gap-3">
                                                    <input type="radio" name="upi" id="upi" />
                                                    <img src="/payment/upi.svg" alt="debit-card.svg"
                                                        className="checkout__payment-img" />
                                                    UPI
                                                </div>
                                            </label>
                                        </li>
                                        <li className="checkout__payment-items">
                                            <label htmlFor="paytm" className="checkout__payment-head checkout__label-text">
                                                <div className="d-flex align-items-center gap-3">
                                                    <input type="radio" name="paytm" id="paytm" />
                                                    <img src="/payment/paytm.svg" alt="debit-card.svg"
                                                        className="checkout__payment-img" />
                                                    PayTM
                                                </div>
                                            </label>
                                        </li>
                                        <li className="checkout__payment-items">
                                            <label htmlFor="netbanking"
                                                className="checkout__payment-head checkout__label-text">
                                                <div className="d-flex align-items-center gap-3">
                                                    <input type="radio" name="netbanking" id="netbanking" />
                                                    <img src="/payment/net.svg" alt="debit-card.svg"
                                                        className="checkout__payment-img" />
                                                    Net Banking
                                                </div>
                                            </label>
                                        </li>
                                        <li className="checkout__payment-items">
                                            <label htmlFor="wallet" className="checkout__payment-head checkout__label-text">
                                                <div className="d-flex align-items-center gap-3">
                                                    <input type="radio" name="wallet" id="wallet" />
                                                    <img src="/payment/wallet.svg" alt="debit-card.svg"
                                                        className="checkout__payment-img" />
                                                    Mobile Wallets
                                                </div>
                                            </label>
                                        </li>
                                    </ul>


                                </div>

                                <h1 className="checkout__title">
                                    Summary
                                </h1>

                                <div className="d-flex align-items-center mt-5 checkout__summary">
                                    <h3 className="checkout__total checkout__total--orginal">
                                        Orginal Price :
                                    </h3>

                                    <h3 className="checkout__total checkout__total--orginal">

                                        Rs {total}
                                    </h3>
                                </div>
                                <hr />

                                <div className="d-flex align-items-center mt-5 checkout__summary">
                                    <h3 className="checkout__total">
                                        Total:
                                    </h3>

                                    <h3 className="checkout__total">

                                        Rs {total}
                                    </h3>
                                </div>

                                <button type="submit" className="btn w-100">Complete Checkout</button>


                            </div>
                        </Grid>
                    </Grid>
                </div >
            </div >

        </div >
    )
}
