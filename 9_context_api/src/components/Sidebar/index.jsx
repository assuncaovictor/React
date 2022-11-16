import { List, ListItemButton, ListItemIcon, ListItemText, ListItem } from "./style";
import Drawer from "@mui/material/Drawer";
import React from "react";
import sidebar from "../../config/router/sidebar/index";
import { NavLink } from "react-router-dom";

const Sidebar = ({ open, drawerWidth }) => {
    return (
        <Drawer
            sx={{
                "& .MuiDrawer-paperAnchorLeft": {
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    height: "calc(100vh - 64px)",
                    marginTop: "64px",
                    width: drawerWidth,
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <List>
                {sidebar.map((side, index) => {
                    const { route, icon, header } = side;
                    return (
                        <ListItem key={route.path}>
                            <ListItemButton
                                key={index + "_sidebar"}
                                component={NavLink}
                                isactive={route.path}
                                to={route.path}
                                alignItems="center"
                            >
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={header} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Drawer>
    );
};

export default Sidebar;
