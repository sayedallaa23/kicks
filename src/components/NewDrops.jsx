import React from "react";
import NewDropsCard from "./NewDropsCard";
import products from "../data.js";
import { Link } from "react-router-dom";

function NewDrops() {
  return (
    <div className="new-drops">
      <div className="new-drops-header">
        <h2>
          Don’t miss out <br /> new drops
        </h2>
        <button className="new-drops-btn blue-btn">Shop New Drops</button>
      </div>
      <div className="new-drops-card-sec">
        {products.slice(0, 4).map((product) => {
          return (
            <Link
              key={product.id}
              to={`pdt/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <NewDropsCard
                pdtname={product.name}
                productImage={product.image}
                pdtprice={product.price}
                pdtcat = {product.category}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NewDrops;
