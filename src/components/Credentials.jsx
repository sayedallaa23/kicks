import React from "react";


const Credentials = (props)=>{
    return (
        <div className="crds">
            <input type={props.type1} placeholder={props.placeholder1} />
            <input type={props.type2} placeholder={props.placeholder2} />
        </div>
    )
}

export default Credentials