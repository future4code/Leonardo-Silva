import axios from 'axios'
import { urlBase, api_Key } from '../Constants/UrlBase'

export const getPopularMovies = () => {
    
        axios.get(`${urlBase}movie/768744/similar?api_key=${api_Key}&language=pt-BR&page=1`, {
    })
    .then((res) => {  

        // console.log(res.data)
    })
    .catch((err) => {
        alert(err.response.message)

    })
}