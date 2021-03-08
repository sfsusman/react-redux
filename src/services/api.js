import axios from 'axios'
export default axios.create({
    baseURL: "https://fast-atoll-73668.herokuapp.com",
    headers: {
        Accept: "application/json",
    },
});