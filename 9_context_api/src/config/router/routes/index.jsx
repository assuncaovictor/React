import Home from "../../../pages/Home";
import Products from "../../../pages/Products";
import Product from "../../../pages/Product";

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
        path: "/products/:id",
        element: <Product />,
    },
];

export default routes;
