import React from "react";
import Body from "../../components/Body";

import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";
import { basicRoutes, authRoutes, notAuthRoutes } from "./routes";
import { useAuthValue } from "../../context/AuthContext";

const Routes = () => {
    const { user } = useAuthValue();

    return (
        <ReactRoutes>
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            {basicRoutes.map(({ path, element }) => {
                return <Route path={path} element={<Body>{element}</Body>} key={path} />;
            })}

            {authRoutes.map(({ path, element }) => {
                return <Route path={path} element={user ? <Body>{element}</Body> : <Navigate to="/login" replace />} key={path} />;
            })}

            {notAuthRoutes.map(({ path, element }) => {
                return (
                    <Route
                        path={path}
                        element={!user ? <Body hasDrawer={false}>{element}</Body> : <Navigate to="/home" replace />}
                        key={path}
                    />
                );
            })}
        </ReactRoutes>
    );
};

export default Routes;
