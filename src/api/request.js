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


    // articles requests / as advice

export const getArticlesRequest = (params) => 
    new Promise((resolve, reject) => {
        HTTP_CLIENT.get("advices", { params })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });


export const showArticleRequest = (id) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.get(`advices/${id}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const getArticleRequest = (id) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.get(`advices/${id}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const createArticleRequest = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("advices", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

export const updateArticleRequest = (id, params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.put(`advices/${id}`, params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });



// get adivce by user
export const getAdviceByUserRequest = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.get("advices/by-user", { params })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

    // publish article
export const publishArticleRequest = (id) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.put(`advices/${id}/publish`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

    // unpublish article
export const unpublishArticleRequest = (id) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.put(`advices/${id}/unpublish`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

    // add section to artcile 
export const addSectionRequest = (adviceId, data) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("advices/" + adviceId + "/sections", data)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });
// update section
export const updateSectionRequest = (sectionId, data) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.put("advices/sections/" + sectionId, data)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    }
    );

// delete section










    // domains requests
    export const getDomainsRequest = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.get("domains", { params })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });