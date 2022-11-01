import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useCallback } from "react";
import { useEffect } from "react";
const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};
export default function App({ imageData }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const isBreakpoint = useMediaQuery(768)


  return (
    <div className="product__swiper__slider">
      <div className="slider__container">
        <div className="thump-slider">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            direction={isBreakpoint ? "horizontal" : "vertical"}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >

            {imageData &&
              imageData.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img src={el} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <div className="main-slider">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff"
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

            {imageData &&
              imageData.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img src={el} />
                  </SwiperSlide>
                )
              })
            }

          </Swiper>
        </div>

      </div>
    </div >
  );
}