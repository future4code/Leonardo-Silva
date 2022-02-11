import axios from 'axios'
import {baseURL} from './baseURL'

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

const result = getSubscribers()

console.log(result)