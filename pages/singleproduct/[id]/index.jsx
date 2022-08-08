import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import Drift from 'drift-zoom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import ProductSlider from "../../../components/productSlider/ProductSlider";

export default function Details() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [product, setProduct] = useState([]);

  const [mainImage, setMainImage] = useState("")
  const imageref = useRef(null);





  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`http://localhost:8000/products/${id}`);
      let singleProduct = await res.json();

      console.log("res pr", singleProduct);

      setProduct(singleProduct);
    };
    fetchProducts();
  }, [id]);


  useEffect(() => {
    if (product) {
      setMainImage(imageref.current)

      console.log("products fetch", mainImage);

      if (mainImage) {
        new Drift(mainImage, {
          paneContainer: document.querySelector(".single-product__details")
        });
      }
    }
  }, [product, mainImage])

  const discountPriceCalculator = (discount, totalPrice) => {
    return (totalPrice * 70) - ((discount / 100) * (totalPrice * 70))
  }

  return (
    <div className="single-product">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            {/* <div className="single-product__zoom-image row">
              <div className="col-md-3">
                <div
                  className="single-product__thumbs"

                >
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                    direction="vertical"
                  >
                    {product.image &&
                      product.image.map((el, i) => (
                        <SwiperSlide key={i}>
                          <div className="single-product__thumbs-img-container">
                            <img src={el} alt={"name"} />
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </div>

              <div className="col-md-9">
                <div className="single-product__main-img">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#D43839",
                      "--swiper-pagination-color": "#D43839",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    {product.image &&
                      product.image.map((el, i) => (
                        <SwiperSlide key={i}>
                          <div className="single-product__img">
                            <img src={el} ref={imageref} class="drift-demo-trigger" data-zoom="https://awik.io/demo/webshop-zoom/shoe-large.jpg" />
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </div>
            </div> */}


            <ProductSlider />
          </div>
          {/* <div className="col-md-6">
            <div className="single-product__details">
              <h2>{product.name}</h2>

              <h1 className="single-product__price">Rs {product.price * 70}</h1>

              <p>{product.fullDescription}</p>
            </div>
          </div> */}



          <div className="col-md-6 product-info">
            <div className="product-info-dtl">
              <div className="">
                <div className="product-info-name">{product.name}</div>
                <div className="reviews-counter">
                  <div className="rate">
                    <input type="radio" id="star5" name="rate" value="5" checked />
                    <label htmlFor="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" checked />
                    <label htmlFor="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" checked />
                    <label htmlFor="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label htmlFor="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label htmlFor="star1" title="text">1 star</label>
                  </div>
                  <span>{product.ratingCount} Reviews</span>
                </div>
                <div className="product-info-price-discount"><span>Rs {discountPriceCalculator(product.discount, product.price)}</span><span className="line-through">Rs {product.price * 70}</span></div>
              </div>
              <p>{product.fullDescription}</p>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="size">Size</label>
                  <select id="size" name="size" className="form-control">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="color">Color</label>
                  <select id="color" name="color" className="form-control">
                    <option>Blue</option>
                    <option>Green</option>
                    <option>Red</option>
                  </select>
                </div>
              </div>
              <label htmlFor="size">Quantity</label>
              <div className="product-info-count">
                <div>
                  <form action="#" className="display-flex">
                    <div className="qtyminus">-</div>
                    <input type="text" name="quantity" value="1" className="qty" />
                    <div className="qtyplus">+</div>
                  </form>
                </div>
                <a href="#" className="round-black-btn">Add to Cart</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// export const getStaticProps = async () => {

//   // Fetching data from jsonplaceholder.

//   // Sending fetched data to the page component via props.
//   return {
//     props: {
//       singleProduct
//     }
//   }
// }

// category: Array(1)
// 0: "electronics"
// length: 1
// [[Prototype]]: Array(0)
// createDate: "July 04 2022 10:10:00 AM"
// discount: 10
// featured: true
// fullDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
// id: "23"
// image: Array(4)
// 0: "/assets/product/5.jpg"
// 1: "/assets/product/6.jpg"
// 2: "/assets/product/7.jpg"
// 3: "/assets/product/8.jpg"
// length: 4
// [[Prototype]]: Array(0)
// name: " product five"
// new: true
// price: 9
// rating: 4
// ratingCount: 20
// saleCount: 10
// shortDescription: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem."
// sku: "asdf123"
// slug: "product-five"
// stock: 20
// tag: Array(1)
// 0: "electronics"
// length: 1
// [[Prototype]]: Array(0)
// thumbImage: Array(2)
// 0: "/assets/product/5.jpg"
// 1: "/assets/product/5_5.jpg"


