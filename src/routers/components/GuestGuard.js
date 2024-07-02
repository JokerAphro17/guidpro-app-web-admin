import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";

// @ts-ignore
export const GuestGuard = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();


    if (auth?.user?.token && auth?.user?.role) {
        const {role} = auth.user;
        return <Navigate to={role == "user" ? "/users" : "/admins"} state={{ from: location }} replace />;
    }

    return <>{children}</>;
};