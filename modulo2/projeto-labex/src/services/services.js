import axios from 'axios'
import UrlBase from '../constants/constants';

export const decideCandidate = async (candidateId, id, escolha, getTrips) => {
    const token = window.localStorage.getItem("token")
    const body = {
        approve: escolha
    }

    try {
        const res = await axios.put(`${UrlBase}/trips/${id}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: token
            }
        })
        if(escolha === true){
            alert("Candidato aprovado!")
        } else {
            alert("Candidato reprovado!")
        }

    } catch (erro) {
        alert("ocorreu um erro!")
        console.log(erro)
    }
}

export const login = async(body, navigate) => {

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

export const deleteTrip = async (id, getTrips) => {
    const token = window.localStorage.getItem("token")
    if (window.confirm("Tem certeza que deseja deletar essa viagem?")) {

        try {
            const res = await axios.delete(`${UrlBase}/trips/${id}`, {
                headers: {
                    auth: token
                }
            })
            getTrips()

        } catch (erro) {
            console.log("Erro: ", erro);
        }
    }
}
