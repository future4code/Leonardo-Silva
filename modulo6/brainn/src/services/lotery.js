import axios from "axios"
import { base_url } from "../constants/base_url"

export const lotery = async(setLoteryId) => {
    try{
        const res = await axios.get(`${base_url}/loterias-concursos`)
        setLoteryId(res.data)
        
    } catch(err){
        console.log(err)
    }
}