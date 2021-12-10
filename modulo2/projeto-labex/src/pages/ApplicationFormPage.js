import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {goToListTripsPage} from '../Rotas/Rotas'
import UrlBase from '../constants/constants';
import * as C from './styles'
import { countries } from '../constants/constants';

export const ApplicationFormPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        getTrips()
    }, [])

    const [trips, setTrips] = useState([])
    const [id, setId] = useState("")
    const [body, setBody] = useState({ name: "", age: 0, applicationText: "", profession: "", country: "" })

    const getTrips = async () => {

        try {
            const res = await axios.get(`${UrlBase}/trips`)
            setTrips(res.data.trips)

        } catch (erro) {
            console.log("Erro: ", erro);
        }
    }

    const onChange = (e) => {
        setBody({ ...body, [e.target.name]: e.target.value })
    }

    const onChangeId = (e) => {
        e.preventDefault()
        setId(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post(`${UrlBase}/trips/${id}/apply`, body)

            alert("Applicação registrada com sucesso")
            setBody({ name: "", age: 0, applicationText: "", profession: "", country: "" })

        } catch (erro) {
            alert("Ocorreu um erro, tente novamente")
            console.log("Erro: ", erro)
        }
    }

    return(
        <div>
            <p>
                ApplicationFormPage
            </p>
            <C.CustomForm onSubmit={onSubmit}>
                <select name="" value={id} defaultValue={""} onChange={onChangeId} required>
                    <option value="" disabled>Escolha uma Viagem</option>
                    {trips.map((trip) => {
                        return <option key={trip.id} value={trip.id}>{trip.name}</option>
                    })}
                </select>
                <input name="name" value={body["name"]} placeholder="Nome" type="text" onChange={onChange} required />
                <input name="age" value={body["age"]} placeholder="Idade" type="Number" min={16} onChange={onChange} required />
                <input name="applicationText" value={body["applicationText"]} placeholder="Texto de candidatura" type="text" onChange={onChange} required />
                <input name="profession" value={body["profession"]} placeholder="Profissão" type="text" onChange={onChange} required />
                <select name="country" value={body["country"]} defaultValue={""} onChange={onChange} required>
                    <option value="" disabled>País de origem</option>
                    {countries.map((country) => {
                        return <option key={country}>{country}</option>
                    })}
                </select>
                <button onClick={() => goToListTripsPage(navigate)}>Voltar</button>
                <button onClick={console.log(body)}>Enviar</button>
            </C.CustomForm>
        </div>
    )  

    
}