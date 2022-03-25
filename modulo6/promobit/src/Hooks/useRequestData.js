import { useState, useEffect } from 'react';
import axios from 'axios';
import { urlBase } from '../Constants/UrlBase'

const useRequestData = (endpoint) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${urlBase}${endpoint}`)
        .then((res) =>{
            setIsLoading(false)
            if(res.data.results){
                setData(res.data.results)
            } else if (res.data.status) {
                setData(res.data)
            } else if (res.data.cast){
                setData(res.data)
            } else if(res.results){
                setData(res.results[0])
            } else {
                setData(res.data.genres)
            } 
            
        })
        .catch((err) => {
            setIsLoading(false)
            setError(err)
        })
    }, [endpoint])

    return [data, error, isLoading]
}

export default useRequestData