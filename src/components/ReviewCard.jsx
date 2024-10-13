import React from "react";
// import { CAlert } from '@coreui/react';
// import '@coreui/coreui/dist/css/coreui.min.css'
import ReactStars from "react-rating-stars-component";
function ReviewCard(props) {
  return (
    <div className="review-card2 w-[100%]   text-[#232321]">
      <div className="review-card-header2 bg-[#FAFAFA] rounded-t-[32px] flex items-center justify-between p-[1rem] pt-[2rem] ">
        <div className="review-card-header-content2">
          <h3 className="font-[700]">{props.reviewTitle}</h3>
          <p>{props.review}</p>
          <div className="review-card-rating2 flex gap-2 items-center">
            <ReactStars
              count={props.stars}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffa52f"
              edit={false}              
            />

            <p className="review-card-rating-num2">{props.rate}</p>
          </div>
        </div>
        <img
          className="rating-profile-img2 rounded-[50%] object-cover w-[50px] h-[50px] self-start"
          src={require("../assets/pdts/" + props.profileImage)}
          alt=""
          srcset=""
        />
      </div>
      <img
        className="review-card-pdt-img2 rounded-b-[32px] object-cover md:w-[100%] md:h-[50%]"
        src={require("../assets/pdts/" + props.productImage)}
        alt=""
        srcset=""
      />
    </div>
  );
}

export default ReviewCard;
