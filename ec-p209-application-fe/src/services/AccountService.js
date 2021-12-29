import {axiosClient} from "../libs/ApiConfig";
import React from "react";

// const axiosClient = axios.create({
//     baseURL: 'http://localhost:8080/api/account',
//     headers: {
//         'content-type': 'application/json',
//     }
// })

const BASE_URL = '/account';

class Account extends React.Component {

    getAll() {
        const url = BASE_URL + `/getall`;
        return axiosClient.post(url);
    }

    getAccountByCid(data) {
        const url = BASE_URL + `/getbycid`;
        return axiosClient.post(url, data);
    }

    addAccount(data) {
        const url = BASE_URL + `/add`;
        return axiosClient.post(url, data);
    }
}

export default new Account();