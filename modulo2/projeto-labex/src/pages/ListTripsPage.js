import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles'
import {goToHomePage, goToApplicationFormPage} from '../Rotas/Rotas'
import AllTrips from '../services/getTrips';

export const ListTripsPage = () => {
    const navigate = useNavigate()
    const [trips, getTrips] = AllTrips()
    
    return(
        <div>
            <p>
                ListTripsPage
            </p>
            <button onClick={() => goToHomePage(navigate)}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>

            <C.GridViagens>
                {trips && trips.length > 0 ? trips.map((trip) => {
                    return (
                        <C.Viagens key={trip.id}>
                            {trip.name}<br/>
                            {trip.description}<br/>
                            {trip.planet}<br/>
                            {trip.date}<br/>
                            {trip.durationInDays}<br/>
                        </C.Viagens>
                    )
                }) : <p>Caregando...</p>}
            </C.GridViagens>
        </div>
    )  
}