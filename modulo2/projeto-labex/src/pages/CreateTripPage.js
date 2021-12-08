import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import UrlBase from '../constants/constants';
import * as C from './styles'


export const CreateTripPage = () => {
    const navigate = useNavigate()

    const goToAdminHomePage = () => {
        navigate("/AdminHomePage")
    }

    const planetas = ["Mercúrio","Vênus","Marte","Jupiter","Saturno","Urano","Netuno","Plutão"]

    const [inputNome, setInputNome] = useState("")
    const [inputPlaneta, setInputPlaneta] = useState("")
    const [inputDescricao, setInputDescricao] = useState("")
    const [inputDuracao, setInputDuracao] = useState(0)
    const [inputData, setInputData] = useState("")

    const onChangeNome = (e) => {
        setInputNome(e.target.value)
    }
    const onChangePlaneta = (e) => {
        setInputPlaneta(e.target.value)
    }
    const onChangeData = (e) => {
        setInputData(e.target.value)
    }
    const onChangeDescricao = (e) => {
        setInputDescricao(e.target.value)
    }
    const onChangeDuracao = (e) => {
        setInputDuracao(e.target.value)
    }

    const createTrip = async () => {

        const body = {
            "name": inputNome,
            "planet": inputPlaneta,
            "date": inputData,
            "description": inputDescricao,
            "durationInDays": inputDuracao
        }


        try {
            const res = await axios.post(`${UrlBase}/trips`, body, {
                headers: {
                    auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"
                }
            })
            console.log(res.data);
            alert("deu certo")
            setInputNome("")
            setInputPlaneta("")
            setInputDescricao("")
            setInputDuracao(0)
            setInputData("")
        } catch(erro){
            console.log("Erro: ", erro);
        }
        
    }

    return(
        <div>
            <h2>Criar uma Viagem</h2>
            <C.CustomForm>
                <input placeholder="Nome" type="text" value={inputNome} onChange={onChangeNome}required/>
                <select defaultValue={""} onChange={onChangePlaneta}>
                    <option value=""  disabled>Escolha um planeta</option>
                    {planetas.map((planeta) => {
                        return <option value={planeta} key={planeta}>{planeta}</option>
                    })}
                    {/* <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Marte">Marte</option>
                    <option value="Jupiter">Jupiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Plutão">Plutão</option>   */}
                </select>
                <input type="date" value={inputData} onChange={onChangeData}/>
                <input placeholder="Descrição" type="text" value={inputDescricao} onChange={onChangeDescricao}/>
                <input placeholder="Duração em Dias" type="number" value={inputDuracao} onChange={onChangeDuracao}/>
                <div>
                    <button onClick={goToAdminHomePage}>Voltar</button>
                    <button onClick={createTrip}>Criar</button>
                </div>
            </C.CustomForm>
        </div>
    )  


    
}