import { BrowserRouter } from "react-router-dom";
import Routes from "./config/router/Routes";
import Body from "./components/Body";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { CounterContextProvider } from "./context/CounterContext";
import { TileColorContextProvider } from "./context/TitleColorContext";

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <CounterContextProvider>
                <TileColorContextProvider>
                    <BrowserRouter>
                        <Body>
                            <Routes />
                        </Body>
                    </BrowserRouter>
                </TileColorContextProvider>
            </CounterContextProvider>
        </QueryClientProvider>
    );
};

export default App;
