import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToListTripsPage, goToLoginPage} from '../Rotas/Rotas'

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>
                Homepage
            </p>
            <button onClick={() => goToListTripsPage(navigate)}>Lista de Viagens</button>
            <button onClick={() => goToLoginPage(navigate)}>Login</button>
        </div>
    )
}