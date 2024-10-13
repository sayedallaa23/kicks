import {React,useEffect} from "react";
import uc from "../assets/underconstruction.png";
import uc2 from "../assets/Page_Under_Construction.jpg"
const UnderConstructionPage = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
      <div className="w-[90%] mx-auto my-[20%]">
   <img src={uc2} alt="" className="mx-auto"/></div>
    )
 
};
export default UnderConstructionPage;
