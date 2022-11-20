import About from "../../../pages/About";
import Home from "../../../pages/Home";

import Dashboard from "../../../pages/Dashboard";
import CreatePost from "../../../pages/CreatePost";

import Register from "../../../pages/Authentication/Register";
import Login from "../../../pages/Authentication/Login";

const basicRoutes = [
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
];

const authRoutes = [
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/post/create",
        element: <CreatePost />,
    },
];

const notAuthRoutes = [
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
];

export { basicRoutes, authRoutes, notAuthRoutes };
