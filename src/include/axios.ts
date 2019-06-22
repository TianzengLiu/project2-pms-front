import axios from 'axios'

export const project2_pms = axios.create({
   baseURL: 'http://ec2-18-188-222-5.us-east-2.compute.amazonaws.com:8888',
   headers:{
       'Content-Type': 'application/json'
   },
   withCredentials: true
})