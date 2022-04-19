import axios from "axios";

let headers = {};

const AxiosInstance = axios.create({
    baseURL: "http://localhost:3001/",
    headers,
});

AxiosInstance.interceptors.request.use(
    async function (config) {
        const token = await sessionStorage.getItem("token");
        config.headers.Authorization = token;

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default AxiosInstance;
