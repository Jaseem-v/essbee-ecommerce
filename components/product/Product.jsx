import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { discountPriceCalculator } from "../utility";
import { addproductToWishList, removeproductfromWishList, addWishListAlert, removeWishListAlert } from '../../redux/action/reduxAction'
import { useDispatch, useSelector } from 'react-redux'
import AlrtMsg from '../alrtmsg/AlrtMsg'


export default function Product({ el, isLoading }) {
    const dispatch = useDispatch()
    const wishList = useSelector((state) => state.wishListReducer.wishlist)





    const isWishList = () => {
        return wishList.some(e => e.id == el.id)
    }

    const addWishListhandler = (e, items) => {
        e.preventDefault();
        dispatch(addproductToWishList(items))
        dispatch(addWishListAlert())

    }

    const removeWishListProduct = (e, id) => {
        e.preventDefault();
        dispatch(removeproductfromWishList(id))
        dispatch(removeWishListAlert())
    }


    return (
        <div>


            <Link href="/singleproduct/[id]" as={`/singleproduct/${el.id}`}>
                <a className='product'>
                    <div className="product__image-part">
                        <div className="product__img">
                            {
                                isLoading ? <Skeleton height={150} /> :

                                    <Image src={el.thumbImage[0]} alt={el.name} layout="responsive" objectFit='unset' width={10} height={10}>
                                    </Image>
                            }

                            <div className="product__image-actions">

                                <div className="product__offer" style={{ background: !el.discount ? "transparent" : "" }}>
                                    {el.discount ? <h5> {el.discount}% Off </h5> : ""}
                                </div>
                                {isWishList() ?
                                    <div className="product__heart" onClick={(e) => removeWishListProduct(e, el.id)}>
                                        <i className='fa fa-heart wish-heart'></i>
                                    </div>
                                    :

                                    <div className="product__heart" onClick={(e) => addWishListhandler(e, el)}>
                                        <i className='fa fa-heart-o wish-heart'></i>
                                    </div>
                                }



                            </div>
                        </div>
                        <div className="product__details-part">
                            <h5 className="product__title">{el.name ?
                                el.name.substring(0, 30) :
                                <Skeleton height={30} />} </h5>

                            {isLoading ? <Skeleton height={30} /> :

                                <div className="product__price_n_rating">
                                    <div className="product__price">
                                        <h3>Rs {discountPriceCalculator(el.discount, el.price)} </h3>
                                        {el.discount ? <h4>Rs {el.price * 70}</h4> : ""}
                                    </div>
                                    <div className="product__rating">
                                        <div className="product__star">
                                            <i className="fa fa-star"></i>
                                            4.4
                                        </div>
                                        <h4 className="product__purchase">10 purchase</h4>
                                    </div>
                                </div>
                            }
                            {/* {isLoading ? <Skeleton height={30} /> :
                        <button className=" product__btn">
                            Add to Cart
                        </button>} */}
                        </div>
                    </div>
                </a>
            </Link>
        </div>

    )
}
