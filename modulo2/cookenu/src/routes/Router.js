import React from "react";
import { Routes, Route } from "react-router-dom";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipesDetailsPage from "../pages/RecipesDetailsPage/RecipesDetailsPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const Router = ({rightButton, setRightButton}) => {
    return(
            <Routes>
                <Route exact path="/login" element={<LoginPage setRightButton={setRightButton}/>}/> 
                <Route exact path="/add-receita" element={<AddRecipesPage/>}/> 
                <Route exact path="/cadastro" element={<SignUpPage setRightButton={setRightButton}/>}/> 
                <Route exact path="/receitas/:id" element={<RecipesDetailsPage/>}/> 
                <Route exact path="/" element={<RecipesListPage/>}/> 
                <Route path="/*" element={<ErrorPage/>}/>

            </Routes>
    )
}

export default Router