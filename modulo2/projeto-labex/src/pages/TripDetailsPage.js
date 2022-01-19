import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ProtectedPage } from '../Hooks/ProtectedPages';
import UrlBase from '../constants/constants';
import * as C from './styles'
import { goToAdminHomePage } from '../Rotas/Rotas';
import AllTrips from '../services/getTrips';
import { decideCandidate } from '../services/services';
import ViagemCard from '../components/ViagemCard';

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
        <C.Column>

            <C.StyledButton onClick={() => goToAdminHomePage(navigate)}>Voltar</C.StyledButton>
            <C.ViagemCardMain2>
                <ViagemCard trip={trip} />
            </C.ViagemCardMain2>
            <div>
                <h2>Candidatos Pendentes</h2>
                {candidates && candidates.length > 0 ? candidates.map((candidate) => {
                    return (
                        <C.ViagemCardMain2>
                            <C.ViagemCardInfo><p><b>Nome:</b></p>{candidate.name}</C.ViagemCardInfo>
                            <C.ViagemCardInfo><p><b>Idade:</b></p>{candidate.age}</C.ViagemCardInfo>
                            <C.ViagemCardInfo><p><b>Profissão:</b></p>{candidate.profession}</C.ViagemCardInfo>
                            <C.ViagemCardInfo><p><b>Texto de aplicação:</b></p>{candidate.applicationText}</C.ViagemCardInfo>
                            <C.ViagemCardInfo><p><b>País:</b></p>{candidate.country}</C.ViagemCardInfo>
                            <C.Row key={candidate.key}><button onClick={() => escolhendoDecisao(true, candidate.id)}>Aprovar</button><button onClick={() => escolhendoDecisao(false, candidate.id)}>Reprovar</button></C.Row>
                        </C.ViagemCardMain2>           
                    )
                }) : <p>Não há candidatos pendentes</p>}
                
                <h2>Candidatos Aprovados</h2>
                {approved && approved.length > 0 ? approved.map((candidate) => {
                    return (
                        <div key={candidate.id}>{candidate.name}</div>
                    )
                }) : <p>Não há candidatos pendentes</p>}

            </div>
        </C.Column>
    )  


}