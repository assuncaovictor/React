import { House, Info } from "phosphor-react";

const sidebar = [
    {
        route: { path: "/home" },
        header: "Home",
        icon: <House />,
    },
    {
        route: { path: "/About" },
        header: "Sobre",
        icon: <Info />,
    },
];

const navbar = [
    {
        route: { path: "/register" },
        header: "Cadastrar",
    },
    {
        route: { path: "/login" },
        header: "Entrar",
    },
];

export { sidebar, navbar };
