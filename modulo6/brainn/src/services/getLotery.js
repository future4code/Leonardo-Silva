import axios from "axios"
import { base_url } from "../constants/base_url"

export const getLotery = async(id, setConcursoId) => {
    try{
        const res = await axios.get(`${base_url}/concursos/${id}`)
        setConcursoId(res.data)
        
    } catch(err){
        console.log(err)
    }
}