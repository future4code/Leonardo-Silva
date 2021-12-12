import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {goToListTripsPage} from '../Rotas/Rotas'
import UrlBase from '../constants/constants';
import * as C from './styles'
import { countries } from '../constants/constants';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import {age} from '../constants/constants';
import { TextField } from '@mui/material';
import { TamanhoInput } from './styles';


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
            setBody({ name: "", age: Number(""), applicationText: "", profession: "", country: "" })
            setId("")

        } catch (erro) {
            alert("Ocorreu um erro, tente novamente")
            console.log("Erro: ", erro)
        }
    }
    console.log(age)
    return(
        <C.Column>
            <C.StyledButton onClick={() => goToListTripsPage(navigate)}>Voltar</C.StyledButton>
            <C.CustomForm onSubmit={onSubmit}>
                <C.TamanhoInput>

                    <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Viagem</InputLabel>
                        <Select name="" value={id} onChange={onChangeId} required>
                            <option value="" disabled>Escolha uma Viagem</option>
                            {trips.map((trip) => {
                                return <MenuItem key={trip.id} value={trip.id}>{trip.name}</MenuItem >
                            })}
                        </Select>
                    </FormControl>

                    <TextField fullWidth id="standard-basic" label="Nome" variant="standard" name="name" value={body["name"]} type="text" onChange={onChange} required />

                    <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Idade</InputLabel>
                        <Select name="age" label="Idade" value={body["age"]} onChange={onChange} required >
                            {age.map((age) => {
                                return <MenuItem key={age} value={age}>{age}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <TextField fullWidth id="standard-basic" name="applicationText" variant="standard" value={body["applicationText"]} label="Texto de candidatura" type="text" onChange={onChange} required />
                    <TextField fullWidth id="standard-basic" name="profession" variant="standard" value={body["profession"]} label="Profissão" type="text" onChange={onChange} required />
                    <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">País de origem</InputLabel>
                        <Select name="country" value={body["country"]} defaultValue={""} onChange={onChange} required>
                            <option value="" disabled>País de origem</option>
                            {countries.map((country) => {
                                return <MenuItem key={country} value={country}>{country}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </C.TamanhoInput>
                <C.Row>
                    <C.StyledButton onClick={console.log(body)}>Enviar</C.StyledButton>
                </C.Row>

            </C.CustomForm>
        </C.Column>
    )  

    
}