import React, {useState} from 'react';
import axios from 'axios';
import { StyledComponent } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate()

    const goToListTripsPage = () => {
        navigate("/ListTripsPage")
    }

    const goToLoginPage = () => {
        navigate("/LoginPage")
    }

return(
    <div>
        <p>
            Homepage
        </p>
        <button onClick={goToListTripsPage}>Lista de Viagens</button>
        <button onClick={goToLoginPage}>Login</button>
    </div>
)  
}