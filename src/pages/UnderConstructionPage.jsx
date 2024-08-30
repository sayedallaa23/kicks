import {React,useEffect} from "react";
import uc from "../assets/underconstruction.png";
import uc2 from "../assets/Page_Under_Construction.jpg"
const UnderConstructionPage = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
   <img src={uc2} alt="" className="underconstruction"/>
    )
 
};
export default UnderConstructionPage;
