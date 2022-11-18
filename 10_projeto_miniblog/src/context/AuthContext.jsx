import { createContext, useContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children, value }) => {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthValue = () => {
    return useContext(AuthContext);
};

export { AuthContext, AuthContextProvider, useAuthValue };
