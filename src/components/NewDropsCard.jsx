import React from "react";
import New from "../assets/new.svg";

function NewDropsCard(props) {
  return (
    <div className="new-drops-card">
      <img
        className="new-drops-card-img"
        src={require("../assets/pdts/" + props.productImage)}
        alt="new-drops-image"
      />
      <img className="new-drops-svg" src={New} alt="" />

      <p>
        {props.pdtname} <br /> RUNNING SHOES
      </p>
      <button className="wide-black-btn" 
      // onClick={(e)=>{e.preventDefault();
      //   window.location.href="/pdt"
      // }}
      >
        View Product - <span className="or-span">${props.pdtprice}</span>
      </button>
    </div>
  );
}

export default NewDropsCard;
