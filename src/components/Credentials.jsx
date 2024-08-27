import React from "react";


const Credentials = (props)=>{
    return (
        <div className="crds">
            <input type={props.type1} placeholder={props.placeholder1} onChange={(e)=>{
                              
               props.setEmail(e.target.value)
            }}/>
            <input type={props.type2} placeholder={props.placeholder2} onChange={(e)=>{
                props.setPassword(e.target.value)
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter")
                    props.handlerFuntion();
                }}
            />
        </div>
    )
}

export default Credentials