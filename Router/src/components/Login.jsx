import React from "react";
import { useNavigate } from "react-router";

function Login(){
    const navigate = useNavigate()


    const Login = ()=>{
        navigate('/about')

    }
    return(
        <>
            <h1>User Login</h1>
            <button onClick={Login}>About</button>
        </>
    )
}
export default Login