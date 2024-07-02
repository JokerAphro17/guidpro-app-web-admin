// authContext
import React, {createContext, useState} from "react";
import HANDLER_STORAGE from "../../data";
import {USER_SESSION} from "../constants";

const AuthContext = createContext(null);

// @ts-ignore
const AuthProvider = ({ children }) => {
    const userData = HANDLER_STORAGE.GET(USER_SESSION, "object");

    const [user, setUser] = useState(userData?.data ?? null);
    const signin = (newUser, callback) => {
        setUser(newUser);
        HANDLER_STORAGE.SET(USER_SESSION, newUser, "object");
        callback();
    };


    const signout = (callback) => {
        setUser(null);
        HANDLER_STORAGE.REMOVE(USER_SESSION);
        callback();
    };
    const value = {
        user,
        signin,
        signout,
    };


    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };