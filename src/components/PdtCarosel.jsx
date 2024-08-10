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
          <img src="https://placehold.co/64x64" className="dot" />
          
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="pdt-carousel">
      {isMobile ? (
        <div style={{ }}>
          <Slider {...settings}>
            <div>
            <img src="https://placehold.co/358x273" alt="" className="a7000"/>
            </div>
            <div>
            <img src="https://placehold.co/358x273"  alt="" className="a7000"/>
            </div>
            <div>
            <img src="https://placehold.co/358x273"  alt="" className="a7000"/>
            </div>
            <div>
            <img src="https://placehold.co/358x273"  alt="" className="a7000"/>
            </div>
          </Slider>
        </div>
      ) : (
        <div>
          {" "}
          <img src="https://placehold.co/429x510" alt="" srcset="" />
          <img src="https://placehold.co/429x510" alt="" srcset="" />
          <img src="https://placehold.co/429x510" alt="" srcset="" />
          <img src="https://placehold.co/429x510" alt="" srcset="" />{" "}
        </div>
      )}
    </div>
  );
}

export default PdtCarosel;
