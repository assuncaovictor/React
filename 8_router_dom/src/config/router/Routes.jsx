import React from "react";

import { Routes as ReactRoutes, Route } from "react-router-dom";
import routes from "./routes";

const Routes = () => {
    return (
        <ReactRoutes>
            {routes.map(({ path, element }) => (
                <Route path={path} element={element} key={path} />
            ))}
        </ReactRoutes>
    );
};

export default Routes;
