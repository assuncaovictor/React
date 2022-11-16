import { House, ShoppingCart } from "phosphor-react";

const sidebar = [
    {
        route: { path: "/home" },
        header: "Home",
        icon: <House />,
    },
    {
        route: { path: "/products" },
        header: "Produtos",
        icon: <ShoppingCart />,
    },
];

export default sidebar;
