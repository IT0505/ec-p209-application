import {axiosClient} from "../libs/ApiConfig";
import React from "react";

// const axiosClient = axios.create({
//     baseURL: 'http://localhost:8080/api/staff',
//     headers: {
//         'content-type': 'application/json',
//     }
// })

const BASE_URL = '/staff'

class StaffService extends React.Component {

    getAll() {
        const url = BASE_URL + `/getall`;
        return axiosClient.post(url);
    }
}

export default new StaffService();
