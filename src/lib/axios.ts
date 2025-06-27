import axios from 'axios'

export const axiosAI = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_AI,
  timeout: 20000
})

export const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_MODE_API === 'DEVELOPMENT' ? import.meta.env.VITE_BASE_API_QUERY_MIRAGE : ''
})

console.log({ axiosApi })