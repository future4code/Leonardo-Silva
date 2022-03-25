import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Error from "../Pages/Error/Error";


const Router = () => {
    return(
            <Routes>
                <Route exact path="/" element={<Home/>}/> 
                <Route exact path="/movie/:id" element={<Details/>}/> 
                <Route path="/*" element={<Error/>}/>
            </Routes>
    )
}

export default Router