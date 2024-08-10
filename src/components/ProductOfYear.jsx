import React from "react";

function ProductOfYear(){
    return(        
            <div className="hero-img">
                <img className="main-img" src={require('../assets/pdtofyear.jpg')}alt="" srcset="" />   
             <h3>Nike product of the year</h3>
             <div className="hero-left">
                <h2>NIKE AIR MAX</h2>
                <p>Nike introducing the new air max for <br /> everyone's comfort</p>
                <button>Shop Now</button>
                </div>   
                <div className="hero-right">
                    <img src={require('../assets/pdrt.jpg')}alt="" srcset="" />
                    <img src={require('../assets/pdrtt.jpg')}alt="" srcset="" />
                    </div>             
            </div>
       
    )
}

export default ProductOfYear