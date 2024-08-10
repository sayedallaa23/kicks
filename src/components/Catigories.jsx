import React, { Component, useState } from "react";
import CatListItem from "./Catlistitem";
import * as data from "../data.js";
// .......................
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Catigories() {
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
        className={`sq-wh-btn cat-list-wh-btn-next ${
          activeSlide === 4 ? "is-dark" : ""
        } `}
        style={{
          ...style,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
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
        className={`sq-wh-btn cat-list-wh-btn-prev ${
          activeSlide === 0 ? "is-dark" : ""
        }`}
        style={{
          ...style,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClick}
      >
        {"<"}
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
    // vertical: false,
    verticalSwiping: true,
  };
  {
    isMobile ? (settings.vertical = true) : (settings.vertical = false);
  }

  return (
    <div className="catigories-sec">
      <div className="cat-sec-heading">
        <h2>Categories</h2>
      </div>
      <div className="cat-list">
        <Slider {...settings}>
          {data.categories.map((cat, index) => {
            return (
              <CatListItem
                key={cat.id}
                productImage={cat.image}
                catname={cat.catItemName}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Catigories;
