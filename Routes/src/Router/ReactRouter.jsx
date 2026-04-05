import React from "react";

import { Route, Routes} from "react-router";
import About from "../pages/About"
import Contect from "../pages/Contect"
import Services from "../pages/Services"
import Home from "../pages/Home"
import Notfound from "../pages/Notfound";


function ReactRouter(){
    return(
        
            
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contect" element={<Contect />}/>
                    <Route path="/services" element={<Services />}/>
                    <Route path="*" element={<Notfound />}/>
                </Routes>

                // Parent Route 

                
        
    )
}
export  default ReactRouter