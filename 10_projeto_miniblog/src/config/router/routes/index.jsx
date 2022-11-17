import About from "../../../pages/About";
import Home from "../../../pages/Home";
import Register from "../../../pages/Register";
import Login from "../../../pages/Login";

const routes = [
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },

    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
];

export default routes;
