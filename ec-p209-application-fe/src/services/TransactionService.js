import {axiosClient} from "../libs/ApiConfig";
import React from "react";

// const axiosClient = axios.create({
//     baseURL: 'http://localhost:8080/api/transaction',
//     headers: {
//         'content-type': 'application/json',
//     }
// })

const BASE_URL = '/transaction';

class TransactionService extends React.Component {
    // getAll() {
    //     const url = `/getall`;
    //     return axiosClient.get(url);
    // }

    
    getAll() {
        const url = BASE_URL + `/getall`;
        return axiosClient.post(url);
    }

    getTransactionByCid(data) {
        const url = BASE_URL + `/getbycid`;
        return axiosClient.post(url, data);
    }

    addTransaction(data) {
        const url = BASE_URL + `/add`;
        return axiosClient.post(url, data);
    }
}

export default new TransactionService();