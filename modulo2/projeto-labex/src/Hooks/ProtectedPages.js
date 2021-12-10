import {useEffect} from 'react'
import { useNavigate } from 'react-router'



export const ProtectedPage = () =>{
    const navigate = useNavigate()
    
    useEffect(()=>{
        const token  = window.localStorage.getItem("token")
        if(!token){
            navigate("/LoginPage")
        }    
    },[navigate])
}