import {axiosClient} from "../libs/ApiConfig"
import React from "react";

// const axiosClient = axios.create({
//     baseURL: 'http://localhost:8080/api/customer',
//     headers: {
//         'content-type': 'application/json',
//     }
// })

const BASE_URL = '/customer';

class Customer extends React.Component {

    // getAll() {
    //     const url = `/getall`;
    //     return axiosClient.get(url);
    // }

    getCustomer(data) {
        const url = BASE_URL + `/getcustomer`;
        return axiosClient.post(url, data);
    }

    addCustomer(data) {
        const url = BASE_URL + `/add`;
        return axiosClient.post(url, data);
    }
}

export default new Customer();