import axios from "axios";

const BASE_URL = 'http://localhost:8080';

export const axiosClient = axios.create({
    baseURL: BASE_URL + '/api',
    headers: {
        'content-type': 'application/json',
    }
})

export const axiosImage = axios.create({
    baseURL: BASE_URL + '/api',
    headers: {
        'content-type': 'multipart/form-data',
    }
})
