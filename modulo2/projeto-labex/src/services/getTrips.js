import { useState, useEffect } from "react";
import UrlBase from "../constants/constants";
import axios from 'axios'


const AllTrips = () => {

    const[info, setInfo] = useState({})

    const getTrips = async () => {

        try {
            const res = await axios.get(`${UrlBase}/trips`)
            setInfo(res.data.trips)

        } catch (erro) {
            console.log("Erro: ", erro);
        }
    }
    useEffect(() => {
        getTrips()
    }, [])

    return [info, getTrips]
}

export default AllTrips