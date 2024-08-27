import axios   from "axios";
import HANDLER_STORAGE from "../data";
import {USER_SESSION} from "../utils/constants";
export const BASE_URL = "http://192.168.1.69:9000/api";


const apiClient = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
    timeout: 10000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // cors
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS", // cors
    },
});

// interceptors
apiClient.interceptors.request.use((config) => {
    const userData = HANDLER_STORAGE.GET(USER_SESSION, "object");
    const token = userData?.data?.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            HANDLER_STORAGE.REMOVE(USER_SESSION);
            window.location.href = "/auth/login";
        }
        return Promise.reject(error);
    }
);

export const handlingErrors = (error) => {
    if (error.response) {
        const dataResponse = error.response.data;
        const message = dataResponse?.errors;
        if (dataResponse) {
            return dataResponse;
        }
        return message;
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
    }
    return error?.message ?? "Oops !! Léger souci.";
};

export const formatPropValueToString = (error, objectMessage = {}) => {
    try {
        const _message = { ...objectMessage };
        for (const key in error) {
            if (error.hasOwnProperty(key)) {
                // @ts-ignore
                _message[key] = error[key]?.toString();
            }
        }
        return _message;
    } catch (error) {
        return objectMessage;
    }
};

export default apiClient;