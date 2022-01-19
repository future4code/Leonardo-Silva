import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import UrlBase from '../constants/constants';
import * as C from './styles'
import {goToAdminHomePage} from '../Rotas/Rotas'
import { ProtectedPage } from '../Hooks/ProtectedPages';
import { planetas } from '../constants/constants';
import { TextField } from '@mui/material';
import { TamanhoInput } from './styles';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';



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
        <C.Column>
            <C.StyledButton onClick={() => goToAdminHomePage(navigate)}>Voltar</C.StyledButton>
            <h2>Criar uma Viagem</h2>
            <C.CustomForm onSubmit={createTrip}>
                <C.TamanhoInput2>
                    <TextField fullWidth id="standard-basic" label="Nome" variant="standard" name="name" value={body["name"]} type="text" onChange={onChange} required />
                    <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Planeta</InputLabel>
                        <Select name="planet" onChange={onChange} required>
                            <option value="" disabled>Escolha um planeta</option>
                            {planetas.map((planeta) => {
                                return <MenuItem key={planeta} value={planeta}>{planeta}</MenuItem >
                            })}
                        </Select>
                    </FormControl>

                    <C.Date name="date" type="date" onChange={onChange} required />
                    <TextField fullWidth id="standard-basic" variant="standard" name="description" label="Descrição" type="text" onChange={onChange} pattern={"^.{10,}"} title={"A descrição deve conter no mínimo 10 caracteres."} required />
                    <TextField fullWidth id="standard-basic" variant="standard" name="durationInDays" label="Duração em Dias" type="number" onChange={onChange} required/>
                    
                </C.TamanhoInput2>
                    <C.Row>
                        <C.StyledButton>Criar</C.StyledButton>
                    </C.Row>
            </C.CustomForm>
        </C.Column>
    )  
}