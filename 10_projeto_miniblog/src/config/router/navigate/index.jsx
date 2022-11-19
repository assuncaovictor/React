import { ChartPieSlice, House, Info, PlusCircle } from "phosphor-react";

const sidebar = [
    {
        route: { path: "/home" },
        header: "Home",
        icon: <House />,
    },
    {
        route: { path: "/post/create" },
        header: "Criar post",
        icon: <PlusCircle />,
    },
    {
        route: { path: "/dashboard" },
        header: "Dashboard",
        icon: <ChartPieSlice />,
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
