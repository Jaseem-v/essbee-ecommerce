import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'
import ProductSlider from "../../../components/productSlider/ProductSlider";
import SliderLayout from "../../../components/sliderLayout/SliderLayout";
import ProductDetailsTab from "../../../components/productDetailsTab/ProductDetailsTab";
import { discountPriceCalculator, randomProducts } from "../../../components/utility";
import { addProductCartAlert, addproductToCart, addproductToWishList, addWishListAlert, removeproductfromWishList, removeWishListAlert } from "../../../redux/action/reduxAction"
import { Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import AlrtMsg from "../../../components/alrtmsg/AlrtMsg";
import productData from "../../../data/products.json"
import Link from "next/link";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Details() {
  const [product, setProduct] = useState([]);
  const [counter, setCounter] = useState(1);
  const slider_products = useSelector((state) => state.products)
  const cartReducer = useSelector((state) => state.cartReducer)
  const wishListReducer = useSelector((state) => state.wishListReducer)


  const dispatch = useDispatch();

  const addcarthandler = (items) => {
    dispatch(addproductToCart(items, counter))
    dispatch(addProductCartAlert())

  }

  const addWishListhandler = (items) => {
    dispatch(addproductToWishList(items))
    dispatch(addWishListAlert())
  }

  const removeWishListProduct = (id) => {
    dispatch(removeproductfromWishList(id))
    dispatch(removeWishListAlert())

  }


  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProducts = async () => {
      let singleProduct = await productData.products.filter(el => el.id === id)

      // console.log(singleProduct[0]);
      setProduct(singleProduct[0]);
    };
    fetchProducts();
  }, [id]);

  // console.log(product);

  const handleIncrement = () => {
    setCounter(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    if (counter <= 1) return;
    setCounter(prevCount => prevCount - 1);
  };

  const isWishList = () => {
    return wishListReducer.wishlist.some(el => el.id == product.id)
  }
  const buynowHandler = (items) => {
    addcarthandler(items);
    router.push("/user/cart")

  }

  const isInCart = cartReducer.cart.some(el => el.product == product)







  return (
    <div className="single-product">
      <div className="container">
        <div className="row">
          <div className="col-md-4">

            {product.image &&
              <ProductSlider imageData={product.image} />}
          </div>

          <div className="col-md-5 product-page">
            <div className="product-page__dtl">
              <div className="">
                <div className="product-page__name">{product.name}</div>
                <div className="reviews-counter">
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                  </div>
                  <span>{product.ratingCount} Reviews</span>
                </div>
              </div>
              <p className="product-page__description">{product.fullDescription}</p>
              <div className="product-page__stock-stats">
                <h6>INSTOCK</h6>
                <h6>SKU : 102.05 </h6>
              </div>

              <hr className="product-page__hr" />

              <ul className="product-page__product-features">
                <li>128 GB ROM</li>
                <li> 15.49 cm (6.1 inch) Super Retina XDR Display</li>
                <li> 12MP + 12MP | 12MP Front Camera</li>
                <li> A14 Bionic Chip with Next Generation Neural Engine Processor</li>
                <li> Ceramic Shield</li>
                <li> IP68 Water Resistance</li>
                <li> All Screen OLED Display</li>
                <li> 1 YEAR BRAND WARRANTY</li>
              </ul>

            </div>
          </div>

          <div className="col-md-3">
            <div className="product-page__right-end">

              <div className="product-page__color-picker">
                <h2 className="product-page__sub-title">
                  Color
                </h2>

                <div className="product-page__color-picker-container">
                  <input type="radio" name="color" id="color-1" value="red" />
                  <label htmlFor="color-1">
                    <img src="/color-variation/APPLE_iPhone_12_Green-1.jpg" alt="" />
                  </label>
                  <input type="radio" name="color" id="color-2" value="red" />
                  <label htmlFor="color-2">
                    <img src="/color-variation/apple-iphone-12-2.jpeg" alt="" />
                  </label>
                  <input type="radio" name="color" id="color-3" value="red" />
                  <label htmlFor="color-3">
                    <img src="/color-variation/Apple_iPhone_12-1.jpeg" alt="" />
                  </label>
                  <input type="radio" name="color" id="color-4" value="red" />
                  <label htmlFor="color-4">
                    <img src="/color-variation/APPLE_iPhone_12_Red-1.jpg" alt="" />
                  </label>

                </div>
              </div>

              <div className="product-page__storage">
                <h2 className="product-page__sub-title">
                  Internal Storage:
                </h2>

                <div className="product-page__storage-container">

                  <input type="radio" name="storage" id="storage-1" />
                  <label htmlFor="storage-1">
                    128 Gb
                  </label>
                  <input type="radio" name="storage" id="storage-2" />
                  <label htmlFor="storage-2">
                    64 Gb
                  </label>
                  <input type="radio" name="storage" id="storage-3" />
                  <label htmlFor="storage-3">
                    32 Gb
                  </label>
                </div>

              </div>

              <div className="product-page__quantity">
                <h5 className="product-page__quantity-text">
                  Quantity
                </h5>
                <div className="product-page__quantity-counter">
                  <button onClick={handleDecrement}>-</button>
                  <h6>{counter}</h6>
                  <button onClick={handleIncrement}>+</button>

                </div>
              </div>
              <div className="product-page__price-discount">
                <span>Rs {discountPriceCalculator(product.discount, product.price)}
                </span>
                <span className="line-through">
                  Rs {product.price * 70}
                </span>
              </div>

              <div className="product-page__delivery">
                <div className="product__page">

                </div>
              </div>

              {
                isInCart ? <h6 className="product-page__success">
                  Product added successfully to cart
                </h6> : null
              }


              <div className="product-page__btn-set">
                {isInCart ?
                  <button className="product-page__btn">
                    <Link href={"/user/cart"}>
                      <a >
                        Go to Cart
                      </a>
                    </Link>
                  </button>
                  :
                  <button className="product-page__btn" onClick={() => addcarthandler(product)}>
                    Add to Cart
                  </button>}
                {!isInCart ? (isWishList() ?
                  <button className="product-page__btn--wishlist" onClick={() => removeWishListProduct(product.id)}>
                    <i className="fa fa-heart wish-heart" ></i>

                  </button>
                  :
                  <button className="product-page__btn--wishlist" onClick={() => addWishListhandler(product)}>
                    <i className="fa fa-heart-o wish-heart"></i>
                  </button>) : null
                }
              </div>
              {!isInCart ?
                <button className="product-page__btn product-page__btn--buy" onClick={() => buynowHandler(product)}>
                  Buy It Now !
                </button> : null
              }
            </div>
          </div>

        </div>


        <ProductDetailsTab />

        <div className="product-page__bottom-slider">


          {slider_products &&

            <SliderLayout title='Related Products' products={randomProducts(slider_products, 10)} />
          }
        </div>

      </div>

    </div >
  );
}



