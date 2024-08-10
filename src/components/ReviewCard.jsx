import React from "react";
// import { CAlert } from '@coreui/react';
// import '@coreui/coreui/dist/css/coreui.min.css'
import ReactStars from "react-rating-stars-component";
function ReviewCard(props) {
  return (
    <div className="review-card">
      <div className="review-card-header">
        <div className="review-card-header-content">
          {" "}
          <h3>{props.reviewTitle}</h3>
          <p>{props.review}</p>
          <div className="review-card-rating">
            {/* <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span> */}
            {/* {}
            <CRating readOnly value={3} /> */}
            <ReactStars
              count={props.stars}
              // onChange={5}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffa52f"
              edit={false}
            />

            <p className="review-card-rating-num">{props.rate}</p>
          </div>
        </div>
        <img
          className="rating-profile-img"
          src={require("../assets/pdts/" + props.profileImage)}
          alt=""
          srcset=""
        />
      </div>
      <img
        className="review-card-pdt-img"
        src={require("../assets/pdts/" + props.productImage)}
        alt=""
        srcset=""
      />
    </div>
  );
}

export default ReviewCard;
