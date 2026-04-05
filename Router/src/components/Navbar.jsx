import React from "react";
import { Link } from "react-router";

function Navbar(){
    return(
        <>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contect"}>Contect</Link>
            <Link to={"/services"}>Services</Link>
        </>
    )
}
export default Navbar