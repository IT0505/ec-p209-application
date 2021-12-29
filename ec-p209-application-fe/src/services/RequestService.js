import {axiosClient, axiosImage} from "../libs/ApiConfig"
import React from "react";

// const axiosClient = axios.create({
//     baseURL: 'http://localhost:8080/api/request',
//     headers: {
//         'content-type': 'application/json',
//     }
// })
// const axiosImage = axios.create({
//     baseURL: 'http://localhost:8080/api/request',
//     headers: {
//         'content-type': 'multipart/form-data',
//     }
// })

const BASE_URL = '/request';

class RequestService extends React.Component {

    getAll() {
        const url = BASE_URL + `/getall`;
        return axiosClient.post(url);
    }

    getRequestById(data) {
        const url = BASE_URL + `/getbyid`;
        return axiosClient.post(url, data);
    }
    
    getImage(data) {
        const url = BASE_URL + `/getimage`;
        return axiosClient.post(url, data);
    }

    addRequest(data) {
        const url = BASE_URL + `/add`;
        return axiosImage.post(url, data);
    }

    checkCard(data) {
        const url = BASE_URL + `/check`;
        return axiosClient.post(url, data);
    }

    approveRequest(data) {
        const url = BASE_URL + `/approve`;
        return axiosClient.post(url, data);
    }

    declineRequest(data) {
        const url = BASE_URL + `/decline`;
        return axiosClient.post(url, data);
    }

    // getAccountByCid(data) {
    //     const url = `/getbycid`;
    //     return axiosClient.post(url, data);
    // }
}

export default new RequestService();