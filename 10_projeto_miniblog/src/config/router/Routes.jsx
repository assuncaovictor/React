import React from "react";

import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";
import Layout from "../../components/Layout";
import routes from "./routes";

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            {routes.map(({ path, element }) => (
                <Route path={path} element={<Layout>{element}</Layout>} key={path} />
            ))}
        </ReactRoutes>
    );
};

export default Routes;
