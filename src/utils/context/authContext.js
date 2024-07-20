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
        if (callback) {
            callback();
        }
    };


    const signout = (callback) => {
        setUser(null);
        HANDLER_STORAGE.REMOVE(USER_SESSION);
        if (callback) {
            callback();
        }
        window.location.href = "/auth/login";
    };


    const authGate = {
        isAdmin : user?.role === "ADMIN",
        isNovice : user?.role === "NOVICE",
        isExpert : user?.role === "EXPERT",
    };


    const value = {
        user,
        signin,
        signout,
        authGate,
    };


    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };