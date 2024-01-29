import axios from 'axios';

const request = axios.create({
    baseURL: "http://localhost/tez/Api",
    headers: {
        'Content-Type': 'application/json',
    },
});

export default request;