import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { StyledComponent } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import UrlBase from '../constants/constants';
import {goToHomePage, goToAdminHomePage} from '../Rotas/Rotas'

export const LoginPage = () => {
    const navigate = useNavigate()

    useEffect (() => {
        signUp()
        const token  = window.localStorage.getItem("token")
        if(token !== null){
            navigate("/AdminHomePage")
        }  
        console.log(token)  
    },[])

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangeSenha = (e) => {
        setSenha(e.target.value)
    }

    const signUp = async () => {
        const body = {
            "email": "astrodev@gmail.com.br",
            "password": "123456"
        }

        try{
            const res = await axios.post(`${UrlBase}/signup`, body)
        }

        catch (err) {
            console.log(err.response.data.message)
        }

    }

    const login = async() => {

        const body = {
            email: email,
            password: senha
        }
        console.log(body)
        try{
            const res = await axios.post(`${UrlBase}/login`, body)
            window.localStorage.setItem("token", res.data.token)
            navigate("/AdminHomePage")
        }

        catch (err) {
            alert(err.response.data.message)
            console.log(err.response)
        }

    }

    return(
        <div>
        <p>
            LoginPage
        </p>
        <input placeholder="Email" type="email" onChange={onChangeEmail}/>
        <input placeholder="Senha" type="password" onChange={onChangeSenha}/><br/>
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
        <button onClick={login}>Entrar</button>
    </div>
    )  


    
}