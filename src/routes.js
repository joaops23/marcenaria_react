import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";


import Home from "./pages/home";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
            </Routes>
        </BrowserRouter>
    )
}


export default Router;