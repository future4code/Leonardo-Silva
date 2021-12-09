import React, {useState} from 'react';
import axios from 'axios';
import { StyledComponent } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import UrlBase from '../constants/constants';
import {goToListTripsPage, goToLoginPage} from '../Rotas/Rotas'

export const HomePage = () => {
    const navigate = useNavigate()


return(
    <div>
        <p>
            Homepage
        </p>
        <button onClick={() => goToListTripsPage(navigate)}>Lista de Viagens</button>
        <button onClick={() => goToLoginPage(navigate)}>Login</button>
    </div>
)  
}