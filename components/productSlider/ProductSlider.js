import React from "react";
import SliderImage from "react-zoom-slider";
// import "./styles.css";

const data = [
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg",
    text: "img1"
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg",
    text: "img2"
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg",
    text: "img3"
  },
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-mau-bac-1-org.jpg",
    text: "img4"
  }
];

export default function ProductSlider() {
  return (
    <div className="App">
      <SliderImage
        data={data}
        width="100%"
        showDescription={true}
        direction="right"
      />
    </div>
  );
}
