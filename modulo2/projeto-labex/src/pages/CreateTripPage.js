import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import UrlBase from '../constants/constants';
import * as C from './styles'
import {goToAdminHomePage} from '../Rotas/Rotas'
import { ProtectedPage } from '../Hooks/ProtectedPages';
import { planetas } from '../constants/constants';


export const CreateTripPage = () => {
    const navigate = useNavigate()
    ProtectedPage()

    const [body, setBody] = useState("")

    const onChange = (e) => {
        setBody({...body, [e.target.name]: e.target.value})
    }

    const createTrip = async (event) => {
        event.preventDefault()
        const token  = window.localStorage.getItem("token")

        try {
            const res = await axios.post(`${UrlBase}/trips`, body, {
                headers: {
                    auth: token
                }
            })

            alert("Viagem criada com sucesso!")
            goToAdminHomePage(navigate)

        } catch(erro){
            console.log("Erro: ", erro);
        }
    }

    return(
        <div>
            <h2>Criar uma Viagem</h2>
            <C.CustomForm onSubmit={createTrip}>
                <input name="name" placeholder="Nome" type="text" onChange={onChange} required />
                <select name="planet" defaultValue={""} onChange={onChange}>
                    <option value="" disabled>Escolha um planeta</option>
                    {planetas.map((planeta) => {
                        return <option value={planeta} key={planeta}>{planeta}</option>
                    })}
                </select>
                <input name="date" type="date" onChange={onChange} required/>
                <input name="description" placeholder="Descrição" type="text" onChange={onChange} pattern={"^.{10,}"} title={"A descrição deve conter no mínimo 10 caracteres."} required/>
                <input name ="durationInDays" placeholder="Duração em Dias" type="number" onChange={onChange} required/>
                <div>
                    <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
                    <button>Criar</button>
                </div>
            </C.CustomForm>
        </div>
    )  
}