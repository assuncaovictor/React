import React from "react";

import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";
import AuthNotRequired from "../../components/Auth/NotRequired";
import AuthRequired from "../../components/Auth/Required";
import Body from "../../components/Body";
import { basicRoutes, authRoutes, notAuthRoutes } from "./routes";

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            {basicRoutes.map(({ path, element, hasDrawer }) => (
                <Route path={path} element={<Body hasDrawer={hasDrawer && true}>{element}</Body>} key={path} />
            ))}

            {authRoutes.map(({ path, element }) => (
                <Route
                    path={path}
                    element={
                        <Body>
                            <AuthRequired>{element}</AuthRequired>
                        </Body>
                    }
                    key={path}
                />
            ))}

            {notAuthRoutes.map(({ path, element }) => (
                <Route
                    path={path}
                    element={
                        <Body>
                            <AuthNotRequired>{element}</AuthNotRequired>
                        </Body>
                    }
                    key={path}
                />
            ))}
        </ReactRoutes>
    );
};

export default Routes;
