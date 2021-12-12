import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles'
import { ProtectedPage } from '../Hooks/ProtectedPages';
import {goToHomePage, goToCreateTripPage, logOut, goToTripDetailsPage} from '../Rotas/Rotas'
import { deleteTrip } from '../services/services';
import AllTrips from '../services/getTrips';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

export const AdminHomePage = () => {
    ProtectedPage()
    const navigate = useNavigate()

    useEffect(() => {
        getTrips()
    }, [])

    const [trips, getTrips] = AllTrips()

    return (
        <C.Column>
            <C.Row>
                <C.StyledButton onClick={() => goToHomePage(navigate)}>Voltar</C.StyledButton>
                <C.StyledButton onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</C.StyledButton>
                <C.StyledButton onClick={() => logOut(navigate)}>Logout</C.StyledButton>
            </C.Row>
            <C.GridViagens2>
                {trips && trips.length > 0 ? trips.map((trip) => {
                    return (
                        <C.Row2 >

                            <a onClick={() => goToTripDetailsPage(navigate, trip.id)}>{trip.name}</a>
                            <IconButton edge="end" aria-label="delete" title="delete" onClick={() => deleteTrip(trip.id, getTrips)}> <DeleteIcon /></IconButton>
                        </C.Row2>
                    )
                }) : <p>Caregando...</p>}

            </C.GridViagens2>
        </C.Column>
    )
}