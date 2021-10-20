import React from "react";

function SubmitButton(props){
    return(

    <button disabled={props.disabled} onClick={props.onClick} className={props.className} >{props.title}</button>
    );

}
export default SubmitButton;