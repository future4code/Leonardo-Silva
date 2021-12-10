import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UrlBase from '../constants/constants';
import {goToHomePage, goToAdminHomePage} from '../Rotas/Rotas'
import { login } from '../services/services';

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
        <div>
            <p>
                LoginPage
            </p>
            <form  onSubmit={onClickLogin}>
                <input name="email" placeholder="Email" type="email" onChange={onChange} pattern={"^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$"} required/>
                <input name="password" placeholder="Senha" type="password" onChange={onChange} required/><br />
                <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                <button>Entrar</button>
            </form>  
        </div>
    )      
}