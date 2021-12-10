import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles'
import { ProtectedPage } from '../Hooks/ProtectedPages';
import {goToHomePage, goToCreateTripPage, logOut, goToTripDetailsPage} from '../Rotas/Rotas'
import { deleteTrip } from '../services/services';
import AllTrips from '../services/getTrips';

export const AdminHomePage = () => {
    ProtectedPage()
    const navigate = useNavigate()

    useEffect(() => {
        getTrips()
    }, [])

    const [trips, getTrips] = AllTrips()

    return (
        <div>
            <p>
                AdminHomePage
            </p>
            <button onClick={() => goToHomePage(navigate)}>Voltar</button>
            <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
            <button onClick={() => logOut(navigate)}>Logout</button>
            <C.ViagensAdmin>
                {trips && trips.length > 0 ? trips.map((trip) => {
                    return (
                        <C.RowViagens key={trip.id}> <C.TripName onClick={() => goToTripDetailsPage(navigate,trip.id)}>{trip.name}</C.TripName> <button onClick={() => deleteTrip(trip.id, getTrips)}>x</button></C.RowViagens>
                    )
                }) : <p>Caregando...</p>}
            </C.ViagensAdmin>
        </div>
    )
}