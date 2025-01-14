import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";


import Home from "./pages/home";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router;