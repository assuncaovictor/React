import { BrowserRouter } from "react-router-dom";
import Routes from "./config/router/Routes";
import Body from "./components/Body";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PageStyleContextProvider } from "./context/PageStyleContext";

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <PageStyleContextProvider>
                    <Body>
                        <Routes />
                    </Body>
                </PageStyleContextProvider>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
