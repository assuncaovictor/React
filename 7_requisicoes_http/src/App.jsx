import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./components/Products";

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Products />
            </div>
        </QueryClientProvider>
    );
};

export default App;
