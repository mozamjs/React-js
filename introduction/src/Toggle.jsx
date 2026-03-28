import React, {useState} from "react";

function Toggle(){
    const[show, setShow] = useState(false)

    return(
        <>
        <button className="logo" onClick={()=> setShow(!show)}>
        Toggle
        </button>
        {show && <p>show</p>}
        </>
    )
}


export default Toggle