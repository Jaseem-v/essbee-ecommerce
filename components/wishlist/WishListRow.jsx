import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { discountPriceCalculator } from '../utility';
import { addproductToCart, removeproductfromWishList } from '../../redux/action/reduxAction';

export default function WishListRow({ cartItem }) {
    const dispatch = useDispatch();

    const addcarthandler = (items) => {
        dispatch(addproductToCart(items,1))
    }

    //Create handleDecrement event handler

    const handleRemove = () => {
        dispatch(removeproductfromWishList(cartItem.id))
    };
    const price = Math.round(discountPriceCalculator(cartItem.discount, cartItem.price))



    return (
        <tr>
            <td className="product-thumbnail">
                <a href="shop-product-basic.html">
                    <img src={cartItem.thumbImage[0]} className="img-fluid" alt="" />
                </a>
            </td>
            <td className="product-name">
                <a href="shop-product-basic.html">{cartItem.name}</a>
                {/* <span className="product-variation mt-4">Color: Black</span> */}
            </td>

            <td className="product-price"><span className="price">Rs {price}</span></td>
            <td>
                <button className="product-page__btn" onClick={() => addcarthandler(cartItem)}>
                    Add to Cart
                </button>
            </td>

            <td className="product-remove">
                <a href="#" onClick={handleRemove}>
                    <i className="fa fa-times"></i>
                </a>
            </td>
        </tr>
    )
}
