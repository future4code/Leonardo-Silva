import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles'
import {goToHomePage, goToApplicationFormPage} from '../Rotas/Rotas'
import AllTrips from '../services/getTrips';
import ViagemCard from '../components/ViagemCard';

export const ListTripsPage = () => {
    const navigate = useNavigate()
    const [trips, getTrips] = AllTrips()
    
    return(
        <div>
            <C.StyledButton onClick={() => goToHomePage(navigate)}>Voltar</C.StyledButton>
            <C.StyledButton onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</C.StyledButton>

            <C.GridViagens>
                {trips && trips.length > 0 ? trips.map((trip) => {
                    return (
                        <ViagemCard trip={trip}/>
                    )
                }) : <p>Caregando...</p>}
            </C.GridViagens>
        </div>
    )  
}