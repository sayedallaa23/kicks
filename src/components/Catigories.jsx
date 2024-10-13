import React, { Component, useState, useRef } from "react";
import CatListItem from "./Catlistitem";
import * as data from "../data.js";
// .......................
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineNavigateNext,MdOutlineNavigateBefore } from "react-icons/md";
function Catigories() {
  let sliderRef = useRef(null);

  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 700
  );
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
    
  };
  {
    isMobile ? (settings.vertical = true) : (settings.vertical = false);
  }

  return (
    <div className="catigories-sec2 bg-[#232321] relative my-[10%] pt-[2rem] md:pt-0 px-[1.6rem] lg:pl-[4rem]">
      <div className="cat-sec-heading2 flex justify-between items-center text-white pb-[3rem] md:py-[4rem]  px-[0.5rem]">
        <h2 className="text-[1.5rem] lg:text-[3rem] font-[700]">Categories</h2>
        <div>
        <button onClick={previous} className={`${activeSlide === 0 ? "is-dark" : ""}`}><MdOutlineNavigateBefore className="text-[#232321]  bg-[#E7E7E3] rounded-md  p-2 text-[30px] lg:text-[40px]"/></button>
        <button onClick={next} className={`${activeSlide === 4 ? "is-dark" : ""}`}><MdOutlineNavigateNext className="text-[#232321]  bg-[#E7E7E3] rounded-md ml-[10px] p-2 text-[30px] lg:text-[40px]"/></button>
        </div>

      </div>
      <div className="cat-list2 relative w-[100%] bottom-[-3rem] lg:top-[4.5rem] left-[1rem] lg:left-[2rem]">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
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
