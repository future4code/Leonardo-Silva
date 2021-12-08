import React, {useState} from 'react';
import axios from 'axios';
import { StyledComponent } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }

    const goToAdminHomePage = () => {
        navigate("/AdminHomePage")
    }

    return(
        <div>
        <p>
            LoginPage
        </p>
        <input placeholder="Email" type="text"/>
        <input placeholder="Senha"/><br/>
        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={goToAdminHomePage}>Entrar</button>
    </div>
    )  


    
}