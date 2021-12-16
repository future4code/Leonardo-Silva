import { useNavigate } from "react-router-dom";
import { useEffect , useLayoutEffect } from "react";
import { goToRecipesList } from "../routes/Coordinator";

const useUnprotectedPage = () => {
    let navigate = useNavigate()

    useEffect(() =>{
        const token = localStorage.getItem("token")
        if(token){
            goToRecipesList(navigate)
        }
    },[navigate])
}

export default useUnprotectedPage