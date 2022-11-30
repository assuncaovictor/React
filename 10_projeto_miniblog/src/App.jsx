import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter } from "react-router-dom";
import Routes from "./config/router/Routes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PageStyleContextProvider } from "./context/PageStyleContext";
import { ToastContextProvider } from "./context/ToastContext";
import { AuthContextProvider } from "./context/AuthContext";
import Toast from "./components/Toast/index";
import React from "react";
import useAuthentication from "./hooks/useAuthentication";

const App = () => {
    const [user, setUser] = React.useState(undefined);
    const { auth } = useAuthentication();

    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, [auth]);


    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider value={{ user }}>
                <BrowserRouter>
                    <ToastContextProvider>
                        <PageStyleContextProvider>
                            <Routes />
                        </PageStyleContextProvider>
                        <Toast />
                    </ToastContextProvider>
                </BrowserRouter>
            </AuthContextProvider>
        </QueryClientProvider>
    );
};

export default App;
