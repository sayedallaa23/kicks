import React,{useState} from "react";
import ReviewCard from "./ReviewCard";
import * as data from "../data.js"
import { useNavigate } from "react-router-dom";

function Reviews(){
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" && window.innerWidth < 700
      );
    return(
        <div className="reviews-sec">
            <div className="reviews-header">
                <h2>Reviews</h2>
                <button className="blue-btn reviews-seeall-btn" onClick={()=>{
                    navigate("/under-construction")
                }}>SEE ALL</button>
            </div>
            <div className="reviews-cards">
            {data.reviews.slice(0,isMobile?1:3).map(rev=>{
                return(
                    <ReviewCard key={rev.id} reviewTitle={rev.title} review={rev.review}
                    profileImage={rev.profileImage}
                    productImage = {rev.pdtImage}
                    // ratingNum = {rev.rating}
                    rate = {rev.rating.toFixed(1)}
                    stars = {rev.rating}
                    />
                )
            })}
            </div>
        </div>
    )
}


export default Reviews


// Abanoub N. Naguib
// function DisplayStars({ rating }) {
//   return (
//     <div className="flex  flex-row  w-full ">
//       {[...Array(5)].map((item: any, idx: number) => {
//         if (rating >= 1) {
//           rating--;
//           return (
//             <Star className="mr-1" fill="#ed992d" stroke="none" width={8.54} />
//           );
//         } else if (rating === 0.5) {
//           rating--;
//           return (
//             <>
//               <StarHalf fill="#ed992d" stroke="none" width={8.54} />
//               <StarHalf
//                 width={8.54}
//                 className="scale-x-[-1] mr-1 -ml-2"
//                 stroke="none"
//                 fill="#e2e2e2"
//               />
//             </>
//           );
//         } else {
//           return (
//             <Star stroke="none" fill="#e2e2e2" className="mr-1" width={8.54} />
//           );
//         }
//       })}
//     </div>
//   );
// }

