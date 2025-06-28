/* eslint-disable @typescript-eslint/no-explicit-any */
 
import axios from 'axios'

export const axiosAI = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_AI,
  adapter: async (config: any) => {
    // Axios separate the base and the one used when you call API.get("/url...") 
    const url = config.baseURL + config.url
  
    return fetch(url, {
      headers: config.headers,
      method: config.method,
      body: config.data
    }).then((response) => {
      return response.json()
    }).then(result => {
      console.log(result?.[0])
      return result?.[0]
    })
  }
})

export const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_MODE_API === 'DEVELOPMENT' ? import.meta.env.VITE_BASE_API_QUERY_MIRAGE : ''
})