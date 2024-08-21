import React from "react";
import { Link } from "react-router-dom";


function CatListItem(props){
    return(
        <div className="cat-list-item">
            <img className="cat-list-img" src={require("../assets/pdts/" + props.productImage)} style={props.styles}/>
            <div className="cat-list-item-cont">
               <h3>{props.catname} <br/>SHOES</h3> 
               <a href={"/categories"}>
                <button className="sq-bl-btn cat-list-bl-btn">↗</button>
                </a>
            </div>
            
        </div>
    )
}



export default CatListItem