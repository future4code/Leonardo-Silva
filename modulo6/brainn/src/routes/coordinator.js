import React from "react";
import { Routes, Route } from "react-router-dom";
import Megasena from "../pages/mega-sena/mega-sena";
import Quina from "../pages/quina/quina";
import Lotofacil from "../pages/lotofacil/lotofacil";
import Lotomania from "../pages/lotomania/lotomania";
import Timemania from "../pages/timemania/timemania";
import DiaDeSorte from "../pages/dia-de-sorte/diadesorte";


const Router = () => {
    return(
            <Routes>
                <Route exact path="/" element={<Megasena/>}/> 
                <Route exact path="/quina" element={<Quina/>}/> 
                <Route exact path="/lotofacil" element={<Lotofacil/>}/> 
                <Route exact path="/lotomania" element={<Lotomania/>}/> 
                <Route exact path="/timemania" element={<Timemania/>}/> 
                <Route path="/dia-de-sorte" element={<DiaDeSorte/>}/>
            </Routes>
    )
}

export default Router