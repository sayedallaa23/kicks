import React, { useEffect } from "react";
import { Component, useState,useRef } from "react";
import NewDropsCard from "./NewDropsCard";
import products from "../data.js";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineNavigateNext,MdOutlineNavigateBefore } from "react-icons/md";

function Suggestioncar() {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  let sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 800
  );

  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={`sq-wh-btn ${
  //         activeSlide === 3 || (isMobile && activeSlide === 1) ? "is-dark" : ""
  //       } `}
  //       style={{
  //         ...style,
  //         display: "flex",
  //         flexDirection: "row",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         backgroundColor: "#232321",
  //         color: "#FFFFFF",
  //         position: "absolute",
  //         top: "-81px",
  //         right: "32px",
  //       }}
  //       onClick={onClick}
  //     >
  //       {">"}
  //     </div>
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={`sq-wh-btn ${activeSlide === 0 ? "is-dark" : ""} `}
  //       style={{
  //         ...style,
  //         display: "flex",
  //         flexDirection: "row",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         backgroundColor: "#232321",
  //         color: "#FFFFFF",
  //         position: "absolute",
  //         top: "-81px",
  //         right: "82px",
  //       }}
  //       onClick={onClick}
  //     >
  //       {"<"}
  //     </div>
  //   );
  // }
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),

    rows: 1,
    slidesPerRow: 1,
  };

  {
    isMobile
      ? (settings.rows = 2) &&
        (settings.slidesPerRow = 2) &&
        (settings.slidesToShow = 1)
      : void 0;
  }

  return (
    <div className="suggestion-car">
      <div className="flex justify-between items-center mb-[2rem]">
      <h1 className="font-[700] text-[1.6rem] md:text-[3rem]">You may also like</h1>
      <div className="flex justify-between items-center">
        <button onClick={previous} className={`${activeSlide === 0 ? "is-dark" : ""}`}><MdOutlineNavigateBefore className="bg-[#232321]  text-[#E7E7E3] rounded-md  p-2 text-[30px] lg:text-[40px]"/></button>
        <button onClick={next} className={`${isMobile?activeSlide==1&&"is-dark":activeSlide==3&&"is-dark"}`}><MdOutlineNavigateNext className="bg-[#232321]  text-[#E7E7E3] rounded-md ml-[10px] p-2 text-[30px] lg:text-[40px]"/></button>
        </div>
      </div>
      
      <div className="suggestion-list">
      <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {products.slice(0, 7).map((product) => {
            return (
              <a key={product.id} href={`/pdt/${product.id}`} className="no-underline">
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
