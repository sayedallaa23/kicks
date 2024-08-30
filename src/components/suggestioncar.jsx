import React from "react";
import { Component, useState } from "react";
import NewDropsCard from "./NewDropsCard";
import products from "../data.js";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Suggestioncar() {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 700
  );

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`sq-wh-btn ${activeSlide === 3 ||isMobile&&activeSlide===1 ? "is-dark" : ""} `}
        style={{
          ...style,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#232321",
          color: "#FFFFFF",
          position: "absolute",
          top: "-81px",
          right: "32px",
        }}
        onClick={onClick}
      >
        {">"}
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`sq-wh-btn ${activeSlide === 0 ? "is-dark" : ""} `}
        style={{
          ...style,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#232321",
          color: "#FFFFFF",
          position: "absolute",
          top: "-81px",
          right: "82px",
        }}
        onClick={onClick}
      >
        {"<"}
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),

        rows:1,
    slidesPerRow: 1,
    
  };


  {
    isMobile ? (settings.rows=2)&&(settings.slidesPerRow=2)&&(settings.slidesToShow= 1): void 0;
  }
  

  return (
    <div className="suggestion-car">
      <h1>You may also like</h1>
      <div className="suggestion-list">
        <Slider {...settings}>
          {products.slice(0, 7).map((product) => {
            return (
              <a key={product.id} href={`/pdt/${product.id}`}>
                <NewDropsCard
                  pdtname={product.name}
                  productImage={product.image}
                  pdtprice={product.price}
                />
              </a>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Suggestioncar;
