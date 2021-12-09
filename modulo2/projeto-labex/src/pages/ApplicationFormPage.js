import React, {useState} from 'react';
import axios from 'axios';
import { StyledComponent } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {goToListTripsPage} from '../Rotas/Rotas'

export const ApplicationFormPage = () => {
    const navigate = useNavigate()


    return(
        <div>
        <p>
            ApplicationFormPage
        </p>
        <button onClick={() => goToListTripsPage(navigate)}>Voltar</button>
    </div>
    )  

    
}