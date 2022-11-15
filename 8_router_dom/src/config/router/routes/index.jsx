import About from "../../../pages/About";
import Home from "../../../pages/Home";
import Info from "../../../pages/Info";
import Product from "../../../pages/Product";
import Products from "../../../pages/Products";

const routes = [
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/products",
        element: <Products />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/products/:id",
        element: <Product />,
    },
    {
        path: "/products/:id/info",
        element: <Info />,
    },
];

export default routes;
