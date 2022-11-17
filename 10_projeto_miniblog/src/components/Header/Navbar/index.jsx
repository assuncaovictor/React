import React from "react";
import { List, ListItemButton } from "./style";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { NavLink } from "react-router-dom";
import { navbar } from "../../../config/router/navigate";
const Navbar = () => {
    return (
        <List disablePadding>
            {navbar.map(({ route, header }) => {
                return (
                    <ListItem key={route.path} disablePadding>
                        <ListItemButton component={NavLink} isactive={route.path} to={route.path} alignItems="center">
                            <ListItemText primary={header} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default Navbar;
