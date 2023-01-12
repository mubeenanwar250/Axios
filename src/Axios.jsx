import axios from "axios";


const APi = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com"
})


export default APi

