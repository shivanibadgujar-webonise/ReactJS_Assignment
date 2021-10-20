import React from "react";

function UserInput(props){
    return(
        <>
        <input type={props.type} value={props.value} placeholder={props.placeholder} className={props.inputClass} onChange={props.onChange}/>        
        
        </>
    );
}

export default UserInput;