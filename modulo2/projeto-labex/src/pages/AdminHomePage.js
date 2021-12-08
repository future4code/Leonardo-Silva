import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { StyledComponent } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import * as C from './styles'
import UrlBase from '../constants/constants';


export const AdminHomePage = () => {
    useEffect (() => {
        getTrips()
    },[])

    const [trips, setTrips] = useState([])

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }

    const goToCreateTripPage = () => {
        navigate("/CreateTripPage")
    }


    const getTrips = async () => {

        try {
            const res = await axios.get(`${UrlBase}/trips`)
            setTrips(res.data.trips)
        
        } catch(erro){
            console.log("Erro: ", erro);
        }
    }

    const deleteTrip = async (id) => {

        try {
            const res = await axios.delete(`${UrlBase}/trips/${id}`, {
                headers: {
                    auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilp3N0tNUEp2RmFqRmtmUlE4N3RBIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MTc5MDE4NDd9.yKi2emMJ-Ln3fNigx09HNZIDWPEhF8e_WnbYAAd1r2k"
                }
            })

           getTrips()
        
        } catch(erro){
            console.log("Erro: ", erro);
        }
    }


    return(
        <div>
            <p>
                AdminHomePage
            </p>
            <button onClick={goToHomePage}>Voltar</button>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button>Logout</button>
            <C.ViagensAdmin>
                {trips && trips.length > 0 ? trips.map((trip) => {
                    return (
                        <C.RowViagens>{trip.name} <button onClick={() => deleteTrip(trip.id)}>x</button></C.RowViagens>

                    )           
                }) : <p>Caregando...</p>}
            </C.ViagensAdmin>
    </div>
    )  
    
}