import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToListTripsPage, goToLoginPage} from '../Rotas/Rotas'
import * as C from './styles'

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>
                Homepage
            </p>
            <C.Row>
                <C.StyledButton onClick={() => goToListTripsPage(navigate)}>Lista de Viagens</C.StyledButton>
                <C.StyledButton onClick={() => goToLoginPage(navigate)}>Login</C.StyledButton>
            </C.Row>
        </div>
    )
}