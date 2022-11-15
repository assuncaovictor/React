import React from "react";

import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";
import routes from "./routes";

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            {routes.map(({ path, element }) => (
                <Route path={path} element={element} key={path} />
            ))}
        </ReactRoutes>
    );
};

export default Routes;
