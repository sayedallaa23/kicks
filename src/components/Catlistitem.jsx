import React from "react";
import { Link } from "react-router-dom";

function CatListItem(props) {
  return (
    <div className="cat-list-item">
      <Link
        to={"/categories"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img
          className="cat-list-img"
          src={require("../assets/pdts/" + props.productImage)}
          style={props.styles}
        />
        <div className="cat-list-item-cont">
          <h3>
            {props.catname} <br />
            SHOES
          </h3>

          <button className="sq-bl-btn cat-list-bl-btn">↗</button>
        </div>
      </Link>
    </div>
  );
}

export default CatListItem;
