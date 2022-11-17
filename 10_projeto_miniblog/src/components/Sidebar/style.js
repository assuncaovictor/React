import { styled, alpha } from "@mui/material/styles";
import MuiList from "@mui/material/List";
import MuiListItemButton from "@mui/material/ListItemButton";
import MuiListItemIcon from "@mui/material/ListItemIcon";
import MuiListItemText from "@mui/material/ListItemText";
import MuiListItem from "@mui/material/ListItem";
import MuiDrawer from "@mui/material/Drawer";

const List = styled(MuiList)(() => ({
    marginTop: "2rem",
}));

const ListItem = styled(MuiListItem)(() => ({
    padding: 0,
}));

const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
    minHeight: "3.5rem",

    "&.active": {
        color: theme.palette.primary.main,
        backgroundColor: alpha(theme.palette.primary.main, 0.05),
        transition: "color 225ms ease-out",

        "& .MuiListItemText-primary": {
            fontWeight: 500,
        },

        "& svg": {
            color: theme.palette.primary.main,
        },
    },
}));

const ListItemIcon = styled(MuiListItemIcon)(() => ({
    minWidth: "2rem",

    "& svg": {
        fontSize: "1.1275rem",
    },
}));

const ListItemText = styled(MuiListItemText)(() => ({
    fontSize: ".8725rem",
}));

const Drawer = styled(MuiDrawer)(() => ({
    "& .MuiDrawer-paperAnchorLeft": {
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        height: "calc(100vh - 64px)",
        marginTop: "64px",
    },
}));

export { List, ListItemIcon, ListItemButton, ListItemText, ListItem, Drawer };
