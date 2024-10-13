import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as data from "../data.js";

import React, { Component, useState } from "react";
import { baseUrl } from "../config";
function PdtCarosel() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 700
  );
  //   sassssssssssss

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={require(`../assets/pdts/${74+i}.jpg`)} className="dot" />

        </a>
        
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="">
      {isMobile ? (
        <div className="">
          <Slider {...settings}>
            <div>
              <img src={require("../assets/pdts/74.jpg")} alt="" className="" />
            </div>
            <div>
              <img src={require("../assets/pdts/75.jpg")} alt="" className="" />
            </div>
            <div>
              <img src={require("../assets/pdts/76.jpg")}alt="" className="" />
            </div>
            <div>
              <img src={require("../assets/pdts/77.jpg")} alt="" className="" />
            </div>
          </Slider>
        </div>
      ) : (
        <div className="flex flex-col gap-2 rounded-[50px] overflow-hidden  md:h-[30%]">
          <div className="flex gap-2">
            <img src={require("../assets/pdts/24.jpg")} alt="" srcset="" className="w-[50%] xl:h-[40vh] md:h-[20vh] object-cover"/>
            <img src={require("../assets/pdts/32.jpg")} alt="" srcset="" className="w-[50%] xl:h-[40vh] md:h-[20vh] object-cover"/>
          </div>
          <div className="flex gap-2">
            <img src={require("../assets/pdts/42.jpg")} alt="" srcset="" className="w-[50%] xl:h-[40vh] md:h-[20vh] object-cover"/>
            <img src={require("../assets/pdts/34.jpg")} alt="" srcset="" className="w-[50%] xl:h-[40vh] md:h-[20vh] object-cover"/>
          </div>
        </div>
      )}
    </div>
  );
}

export default PdtCarosel;
