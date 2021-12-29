import {axiosClient} from "../libs/ApiConfig";
import React from "react";

// const axiosClient = axios.create({
//     baseURL: 'http://localhost:8080/api/card',
//     headers: {
//         'content-type': 'application/json',
//     }
// })

const BASE_URL = '/card';

class CardService extends React.Component {

    getAllLocalDebit() {
        const url = BASE_URL + `/localdebit/getall`;
        return axiosClient.get(url);
    }

    getLocalDebitByCid(data) {
        const url = BASE_URL + `/localdebit/getbycid`;
        return axiosClient.post(url, data);
    }

    getAllInterDebit() {
        const url = BASE_URL + `/interdebit/getall`;
        return axiosClient.get(url);
    }

    getInterDebitByCid(data) {
        const url = BASE_URL + `/interdebit/getbycid`;
        return axiosClient.post(url, data);
    }

    getCardInfo(data) {
        const url = BASE_URL + `/getcardinfo`;
        return axiosClient.post(url, data);
    }


    getAllCredit() {
        const url = BASE_URL + `/credit/getall`;
        return axiosClient.get(url);
    }

    getCreditByCid(data) {
        const url = BASE_URL + `/credit/getbycid`;
        return axiosClient.post(url, data);
    }
}

export default new CardService();