import React from "react";
import { Routes, Route } from "react-router-dom";


const Router = () => {
    return(
            <Routes>
                <Route exact path="/" element={<Megasena/>}/> 
                <Route exact path="/quina" element={<Quina/>}/> 
                <Route exact path="/lotofacil" element={<Lotofacil/>}/> 
                <Route exact path="/lotomania" element={<Lotomania/>}/> 
                <Route exact path="/timemania" element={<Timemania/>}/> 
                <Route path="/dia-de-sorte" element={<Diadesorte/>}/>
            </Routes>
    )
}

export default Router