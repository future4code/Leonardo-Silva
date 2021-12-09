import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { StyledComponent } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import UrlBase from '../constants/constants';
import * as C from './styles'
import {goToHomePage, goToApplicationFormPage} from '../Rotas/Rotas'

export const ListTripsPage = () => {
    const navigate = useNavigate()

    useEffect (() => {
        getTrips()
    },[])

    const [trips, setTrips] = useState([])
    

    

    const getTrips = async () => {

        try {
            const res = await axios.get(`${UrlBase}/trips`)
            setTrips(res.data.trips)
        
        } catch(erro){
            console.log("Erro: ", erro);
        }
    }


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
                        <C.Viagens>
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