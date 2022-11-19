import { List, ListItemButton, ListItemIcon, ListItemText, ListItem, Drawer } from "./style";
import React from "react";
import { sidebar } from "../../config/router/navigate";
import { NavLink } from "react-router-dom";
import { usePageStyle } from "../../hooks/usePageStyle";

const Sidebar = () => {
    const { drawerWidth, openDrawer, hasDrawer } = usePageStyle();

    return (
        <Drawer
            sx={{ "& .MuiDrawer-paperAnchorLeft": { width: drawerWidth } }}
            variant="persistent"
            anchor="left"
            open={openDrawer && hasDrawer}
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
