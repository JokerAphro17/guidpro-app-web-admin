import apiClient, { handlingErrors } from "./client";
const HTTP_CLIENT = apiClient;


export const signInRequest = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("auth/signin", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const signUpRequest = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("auth/signup", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
