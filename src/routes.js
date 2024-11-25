import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";


import Home from "./pages/home";
import Contacts from "./pages/Contacts";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router;