import React from "react";
import { usePageStyleContext } from "../../hooks/context";

const Layout = ({ children }) => {
    const { setHasDrawer } = usePageStyleContext();

    const isAuthentication = window.location.pathname === "/register" || window.location.pathname === "/login";
    setHasDrawer(!isAuthentication);

    return <>{children}</>;
};

export default Layout;
