import React from "react";
import { useNavigate } from "react-router-dom";

function ProductOfYear() {
  const navigate = useNavigate();
  return (
    <div className="hero-img mx-auto relative">
      <img
        className="main-img rounded-3xl lg:rounded-[50px] object-cover lg:h-[80vh] w-[100%]"
        src={require("../assets/pdtofyear.jpg")}
        alt=""
        srcset=""
      />
      <h3 className="bg-[#232321] text-[#e7e7e3] p-2 text-[8px] md:text-[12px] md:top-[15rem] lg:text-[15px] lg:p-5 transform rotate-[-90deg] origin-top-left absolute lg:px-10 px-4 w-fit rounded-b-xl top-[10rem] lg:top-[21rem]">
        Nike product of the year
      </h3>

      <div className="hero-left text-[#e7e7e3] absolute bottom-4 left-10 md:bottom-[4rem] md:left-8 lg:bottom-[5rem] lg:left-[4rem]">
        <h2 className="font-[700] text-lg lg:text-[3rem]">NIKE AIR MAX</h2>
        <p className="text-[#e7e7e3] text-[10px] lg:text-[1rem] lg:my-2">
          Nike introducing the new air max for <br /> everyone's comfort
        </p>
        <button
          onClick={() => {
            navigate("/categories");
          }}
          className="bg-[#4a69e2] p-1 px-2 text-[10px] lg:text-[1rem] mt-2 rounded-[8px]"
        >
          Shop Now
        </button>
      </div>
      <div className="hero-right absolute flex flex-col bottom-4 right-5 md:bottom-8 md:right-8 lg:bottom-[4rem] lg:right-[4rem]">
        <img
          src={require("../assets/pdrt.jpg")}
          alt=""
          srcset=""
          className="w-[14vw] object-cover border-[2px] border-white rounded-[8px] lg:rounded-2xl"
        />
        <img
          src={require("../assets/pdrtt.jpg")}
          alt=""
          srcset=""
          className="w-[14vw] object-cover border-[2px] border-white rounded-[8px] lg:rounded-2xl mt-1"
        />
      </div>
    </div>
  );
}

export default ProductOfYear;
