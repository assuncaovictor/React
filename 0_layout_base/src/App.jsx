import { BrowserRouter } from "react-router-dom";
import Routes from "./config/router/Routes";
import Body from "./components/Body";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Body>
                    <Routes />
                </Body>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
