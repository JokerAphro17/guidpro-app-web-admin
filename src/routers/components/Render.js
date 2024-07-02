import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../../utilities/hook/useAuth";
import { useAuthorized } from "../hook/useAuthorized";
import DashboardLayout from "../../LayoutContainers/DashboardLayout";
import PageLayout from "../../LayoutContainers/PageLayout";

const Layouts = {
    Admin: DashboardLayout,
    Client: PageLayout,
};
// @ts-ignore
function Render({ forAll, roles, layout, page }) {
    const auth = useAuth();
    const location = useLocation();
    const user = auth?.user ?? null;
    const authorized = useAuthorized(roles ?? [], user);



    if (forAll) {
        layout = user?.role ? "Admin" : "Client";
    }

    // @ts-ignore
    const RouteLayout = Layouts[layout];
    const ComponentPage = page;

    if (auth?.user?.token && !authorized) {
        return (
            <Navigate to={"/unauthorize"} state={{ from: location }} replace />
        );
    }
    return (
        <RouteLayout>
            <ComponentPage />
        </RouteLayout>
    );
}

export default Render;