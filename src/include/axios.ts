import axios from 'axios'

export const project2_pms = axios.create({
   baseURL: 'http://localhost:8050',
   headers:{
       'Content-Type': 'application/json'
   },
   withCredentials: true
})