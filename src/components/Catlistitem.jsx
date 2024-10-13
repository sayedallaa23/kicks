import React from "react";
import { Link } from "react-router-dom";

function CatListItem(props) {
  return (
    <div className="cat-list-item2 relative">
      <Link
        to={"/categories"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img
          className="cat-list-img2 object-cover"
          src={require("../assets/pdts/" + props.productImage)}
          style={props.styles}
        />
        <div className="cat-list-item-cont2 absolute bottom-[2rem] flex justify-between items-center w-[100%] px-[1.5rem] pb-2 xl:bottom-[4rem] lg:px-[4rem] font-[700] xl:text-[2rem] lg:text-[1.5rem] text-[#232321]">
          <h3>
            {props.catname} <br />
            SHOES
          </h3>

          <button className="bg-[#232321] p-[5px] lg:p-[10px] text-[20px] text-white rounded-md">
            ↗
          </button>
        </div>
      </Link>
    </div>
  );
}

export default CatListItem;
