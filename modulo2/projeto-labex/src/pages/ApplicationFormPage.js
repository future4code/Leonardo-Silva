import React, {useState} from 'react';
import axios from 'axios';
import { StyledComponent } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const goToListTripsPage = () => {
        navigate("/ListTripsPage")
    }


    return(
        <div>
        <p>
            ApplicationFormPage
        </p>
        <button onClick={goToListTripsPage}>Voltar</button>
    </div>
    )  

    
}