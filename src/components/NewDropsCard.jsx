import React from "react";
import New from "../assets/new.svg";

function NewDropsCard(props) {
  return (
    <div className="new-drops-card relative w-[99%] mb-[0.5rem]">
      <img
        className="new-drops-card-img  border-[5px] border-white rounded-[10px]"
        src={require("../assets/pdts/" + props.productImage)}
        alt="new-drops-image"
      />
      <img
        className="new-drops-svg absolute top-[5px] left-[5px] w-[25px] md:w-[40px]"
        src={New}
        alt=""
      />

      <p className="text-[#232321] font-[600] md:text-[1.3re] lg:text-[1.5rem] my-[1rem]">
        {props.pdtname} <br /> {props.pdtcat} Shoes
      </p>
      <button className="wide-black-btn font-[500] bg-[#232321] text-[#ffffff] w-[100%] py-2 rounded-[8px] lg:py-3 text-[10px] md:text-[0.6rem] xl:text-[1rem]">
        View Product -{" "}
        <span className="or-span text-[#ffa52f]">${props.pdtprice}</span>
      </button>
    </div>
  );
}

export default NewDropsCard;
