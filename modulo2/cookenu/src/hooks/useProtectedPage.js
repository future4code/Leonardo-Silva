import { useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { goToLogin } from "../routes/Coordinator";

const useProtectedPage = () => {
    let navigate = useNavigate()

    useEffect(() =>{
        const token = localStorage.getItem("token")
        if(!token){
           goToLogin(navigate)
        }
    },[navigate])
}

export default useProtectedPage