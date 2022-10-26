import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { discountPriceCalculator } from '../utility';
import { decrementCartProduct, incrementCartProduct, removeProductCartAlert, removeproductfromCart } from '../../redux/action/reduxAction';

export default function CartRow({ cartItem, quantity }) {
    const [counter, setCounter] = useState(1);
    const dispatch = useDispatch();


    const handleIncrement = () => {
        dispatch(incrementCartProduct(cartItem))
    };

    //Create handleDecrement event handler
    const handleDecrement = () => {
        if (quantity > 1) {
            dispatch(decrementCartProduct(cartItem))
        }
    };
    const handleRemove = () => {
        dispatch(removeproductfromCart(cartItem.id))
        dispatch(removeProductCartAlert())
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

            <td className="product-quantity">
                <div className="pro-qty mx-0">
                    <a href="#" className="dec qty-btn" onClick={handleDecrement}>-</a>
                    <input type="text" value={quantity} disabled />
                    <a href="#" className="inc qty-btn" onClick={handleIncrement}>+</a></div>
            </td>

            <td className="total-price"><span className="price">Rs {price * quantity}</span></td>

            <td className="product-remove">
                <a href="#" onClick={handleRemove}>
                    <i className="fa fa-times"></i>
                </a>
            </td>
        </tr>
    )
}
