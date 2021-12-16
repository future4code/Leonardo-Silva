import axios from "axios"
import { UrlBase } from '../constants/Urls'

export const createRecipe = (body, clear, setIsLoading) => {
  setIsLoading(true)
    axios.post(`${UrlBase}/recipe`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        alert(res.data.message)
        clear()
        setIsLoading(false)
      })
      .catch((err) => {
        alert(err.response.message)
        setIsLoading(false)
      })
  }