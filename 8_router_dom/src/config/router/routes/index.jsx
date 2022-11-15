import About from "../../../pages/About";
import Home from "../../../pages/Home";
import Product from "../../../pages/Product";
import Products from "../../../pages/Products";

const routes = [
    {
        path: "/home",
        name: "home",
        element: <Home />,
    },
    {
        path: "/products",
        name: "produtos",
        element: <Products />,
    },
    {
        path: "/about",
        name: "sobre",
        element: <About />,
    },
    {
        path: "/products/:id",
        name: "sobre",
        element: <Product />,
    },
];

export default routes;
