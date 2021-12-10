import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ProtectedPage } from '../Hooks/ProtectedPages';
import UrlBase from '../constants/constants';
import * as C from './styles'
import { goToAdminHomePage } from '../Rotas/Rotas';
import AllTrips from '../services/getTrips';
import { decideCandidate } from '../services/services';

export const TripDetailsPage = () => {
    const navigate = useNavigate()
    const [trips, getTrips] = AllTrips()
    ProtectedPage()

    const { id } = useParams()
    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])
    const [approved, setApproved] = useState([])
    

    useEffect(() => {
        getTripDetail()
        getTrips()
    }, [candidates])

    const getTripDetail = async () => {
        
        try {
            const token = window.localStorage.getItem("token");
            const res = await axios.get(`${UrlBase}/trip/${id}`, {
                headers: {
                    auth: token
                }
            })
            setTrip(res.data.trip)
            setCandidates(res.data.trip.candidates)
            setApproved(res.data.trip.approved)

        } catch (erro) {
            console.log("Erro: ", erro);
        }
    }

    const escolhendoDecisao = (escolha, candidateId) =>{
        decideCandidate(candidateId, id, escolha, getTrips)
    }

    return(
        <div>
            <p>
                TripDetailsPage
            </p>
            <div>
                <C.InfoTrip>
                    <p>nome:</p>{trip["name"]}
                </C.InfoTrip>
                <C.InfoTrip>
                    <p>Descrição:</p>{trip["description"]}
                </C.InfoTrip>
                <C.InfoTrip>
                    <p>Planeta:</p>{trip["planet"]}
                </C.InfoTrip>
                <C.InfoTrip>
                    <p>Duração:</p>{trip["durationInDays"]} dias
                </C.InfoTrip>
                <C.InfoTrip>
                    <p>Data:</p>{trip["date"]}
                </C.InfoTrip>
                <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
            </div>
            <div>
            <h2>Candidatos Pendentes</h2>
            {candidates && candidates.length > 0 ? candidates.map((candidate) => {
                return (
                    <div key={candidate.key}>{candidate.name}<button onClick={() => escolhendoDecisao(true, candidate.id)}>Aprovar</button><button onClick={() => escolhendoDecisao(false, candidate.id)}>Reprovar</button></div>
                )
                }) : <p>Não há candidatos pendentes</p>}

            <h2>Candidatos Aprovados</h2>
            {approved && approved.length > 0 ? approved.map((candidate) => {
                return (
                    <div key={candidate.id}>{candidate.name}</div>
                )
                }) : <p>Não há candidatos pendentes</p>}

            </div>
        </div>
    )  


}