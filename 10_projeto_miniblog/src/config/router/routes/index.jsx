import About from "../../../pages/About";
import Home from "../../../pages/Home";
import Register from "../../../pages/Register";
import Login from "../../../pages/Login";
import Dashboard from "../../../pages/Dashboard";
import CreatePost from "../../../pages/CreatePost";

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
        hasDrawer: false,
    },
    {
        path: "/login",
        element: <Login />,
        hasDrawer: false,
    },
];

export { basicRoutes, authRoutes, notAuthRoutes };
