import React from "react";
import ReactRouter from "./Router/ReactRouter";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />
      <Login />
      <ReactRouter />
    </>
  )
}

export default App