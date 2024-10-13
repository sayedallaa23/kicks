import React from "react";
import NewDropsCard from "./NewDropsCard";
import products from "../data.js";
import { Link ,useNavigate} from "react-router-dom";

function NewDrops() {
  const navigate = useNavigate();
  return (
    <div className="new-drops">
      <div className="new-drops-header flex justify-between items-center my-[1rem] lg:my-[5rem]">
        <h2 className="text-[#232321] text-[1.2rem] md:text-[1.5rem] xl:text-[5rem] lg:text-[3rem] uppercase font-[700] leading-none">
          Don’t miss out <br /> new drops
        </h2>
        <button className="text-[#ffffff] text-[10px] md:text-[15px] lg:text-[20px] bg-[#4a69e2] p-2 rounded-lg px-4 lg:px-6 mr-3"onClick={()=>{
          navigate("/categories");
        }}>Shop New Drops</button>
      </div>
      <div className="new-drops-card-sec flex flex-wrap gap-x-2">
        {products.slice(0, 4).map((product) => {
          return (
            <Link
              key={product.id}
              to={`pdt/${product.id}`}
              style={{ textDecoration: "none" }}
              className="w-[45%] lg:w-[24%] mb-[15px]"
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
