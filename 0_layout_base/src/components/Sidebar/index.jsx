import { List, ListItemButton, ListItemIcon, ListItemText, ListItem, Drawer } from "./style";
import React from "react";
import sidebar from "../../config/router/sidebar/index";
import { NavLink } from "react-router-dom";

const Sidebar = ({ open, drawerWidth }) => {
    return (
        <Drawer sx={{ width: drawerWidth }} variant="persistent" anchor="left" open={open}>
            <List>
                {sidebar.map((side, index) => {
                    const { route, icon, header } = side;
                    return (
                        <ListItem key={route}>
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
