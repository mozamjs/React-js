import React from "react";

import { Route, Routes } from "react-router";
import About from "../pages/About"
import Contect from "../pages/Contect"
import Services from "../pages/Services"
import Home from "../pages/Home"
import Notfound from "../pages/Notfound";
import Dashboard from "../pages/Dashboard";
import Setting from "../pages/Setting";
import Profile from "../pages/Profile";


function ReactRouter() {
    return (


        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contect" element={<Contect />} />
            <Route path="services" element={<Services />} />
            <Route path="*" element={<Notfound />} />

            <Route path="dashboard" element={<Dashboard />}>

                <Route path="setting" element={<Setting />} />
                <Route path="profile" element={<Profile />} />

            </Route>

        </Routes>

       



    )
}
export default ReactRouter