import React from "react";

import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";
import Body from "../../components/Body";
import routes from "./routes";

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            {routes.map(({ path, element, hasDrawer }) => (
                <Route path={path} element={<Body hasDrawer={hasDrawer && true}>{element}</Body>} key={path} />
            ))}
        </ReactRoutes>
    );
};

export default Routes;
