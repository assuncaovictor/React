import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./components/Products";
import "./App.css";
import Product from "./components/Product/index";

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Products />

                <Product />
            </div>
        </QueryClientProvider>
    );
};

export default App;
