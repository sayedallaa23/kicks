import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import * as data from "../data.js";
import { useNavigate } from "react-router-dom";

function Reviews() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 800
  );
  return (
    <div className="reviews-sec2 mb-[10%] lg:mb-0 md:mb-0">
      <div className="reviews-header2 flex justify-between items-center mb-[10%]">
        <h2 className="text-[#232321] text-[1.2rem] md:text-[1.5rem] xl:text-[5rem] lg:text-[3rem] font-[700] uppercase">
          Reviews
        </h2>
        <button
          className="text-[#ffffff] text-[10px] md:text-[15px] lg:text-[20px] bg-[#4a69e2] p-2 rounded-lg px-4 lg:px-6 mr-3"
          onClick={() => {
            navigate("/under-construction");
          }}
        >
          SEE ALL
        </button>
      </div>
      <div className="flex gap-3">
        {data.reviews.slice(0, isMobile ? 1 : 3).map((rev) => {
          return (
            <ReviewCard
              key={rev.id}
              reviewTitle={rev.title}
              review={rev.review}
              profileImage={rev.profileImage}
              productImage={rev.pdtImage}
              rate={rev.rating.toFixed(1)}
              stars={rev.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
