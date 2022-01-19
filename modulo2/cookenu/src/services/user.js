import axios from 'axios'
import { UrlBase } from '../constants/Urls'
import { goToRecipesList } from '../routes/Coordinator'

export const login = async(body, clear, navigate, setRightButton, setIsLoading) => {
    setIsLoading(true)
    try{
        const res = await axios.post(`${UrlBase}/user/login`, body)
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToRecipesList(navigate)
        setRightButton("Logout")
        
        
    }
    catch (err) {
        setIsLoading(false)
        alert(err.response.data.message)
    }

}

export  const signUp = async(body, clear, navigate, setRightButton, setIsLoading) => {
    setIsLoading(true)
    try{
        const res = await axios.post(`${UrlBase}/user/signup`, body)
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToRecipesList(navigate)
        setRightButton("Logout")
    }
    catch (err) {
        alert(err.response.data.message)
        setIsLoading(false)
    }

}
