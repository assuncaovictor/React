import React from "react";
import { List, ListItemButton } from "./style";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { NavLink, useNavigate } from "react-router-dom";
import { navbar } from "../../../config/router/navigate";
import useAuthentication from "../../../hooks/useAuthentication";
import { useAuthValue } from "../../../context/AuthContext";
import { useToastContext } from "../../../hooks/useToast";

const Navbar = () => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();
    const { addToast } = useToastContext();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        addToast("Logout realizado com sucesso", "success");
        navigate("/login");
    };

    return (
        <List disablePadding>
            {user ? (
                <ListItem key={"/logout"} disablePadding>
                    <ListItemButton alignItems="center" onClick={handleLogout}>
                        <ListItemText primary="Sair" />
                    </ListItemButton>
                </ListItem>
            ) : (
                navbar.map(({ route, header }) => {
                    return (
                        <ListItem key={route.path} disablePadding>
                            <ListItemButton component={NavLink} isactive={route.path} to={route.path} alignItems="center">
                                <ListItemText primary={header} />
                            </ListItemButton>
                        </ListItem>
                    );
                })
            )}
        </List>
    );
};

export default Navbar;
