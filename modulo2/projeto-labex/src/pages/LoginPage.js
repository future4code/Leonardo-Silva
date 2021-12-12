import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UrlBase from '../constants/constants';
import {goToHomePage, goToAdminHomePage} from '../Rotas/Rotas'
import { login } from '../services/services';
import * as C from './styles'
import { TextField } from '@mui/material';

export const LoginPage = () => {
    const navigate = useNavigate()

    useEffect (() => {
        const token  = window.localStorage.getItem("token")
        if(token !== null){
            navigate("/AdminHomePage")
        }   
    },[])

    const [body, setBody] = useState({email: "", password: ""})

    const onChange = (e) => {
        setBody({...body, [e.target.name]: e.target.value})
    }

    const onClickLogin = (e) => {
        e.preventDefault()
        login(body, navigate)
    }

    return(
        <C.Column>
            <C.StyledButton onClick={() => goToHomePage(navigate)}>Voltar</C.StyledButton>
            <form onSubmit={onClickLogin}>

                <C.Row3>
                    <TextField id="standard-basic" label="Email" variant="standard" name="email" type="email" onChange={onChange} pattern={"^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$"} required />
                    <TextField id="standard-basic" label="Senha" variant="standard" name="password" type="password" onChange={onChange} required />

                    <C.StyledButton>Entrar</C.StyledButton>
                </C.Row3>

            </form>
        </C.Column>
    )      
}