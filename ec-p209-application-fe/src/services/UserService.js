import {axiosClient} from "../libs/ApiConfig";
import React from "react";

// const axiosClient = axios.create({
//     baseURL: 'http://localhost:8080/api/user',
//     headers: {
//         'content-type': 'application/json',
//     }
// })

const BASE_URL = '/user'

class UserService extends React.Component {

    getAll() {
        const url = BASE_URL + `/getall`;
        return axiosClient.get(url);
    }

    checkLogin(data) {
        const url = BASE_URL + `/login`;
        return axiosClient.post(url, data);
    }

    addUser(data) {
        const url = BASE_URL + `/add`;
        return axiosClient.post(url, data);
    }
}

export default new UserService();