import { styled, alpha } from "@mui/material/styles";
import MuiList from "@mui/material/List";
import MuiListItemButton from "@mui/material/ListItemButton";
import MuiListItemIcon from "@mui/material/ListItemIcon";
import MuiListItemText from "@mui/material/ListItemText";
import MuiListItem from "@mui/material/ListItem";

const List = styled(MuiList)(() => ({
    marginTop: "2rem",
}));

const ListItem = styled(MuiListItem)(() => ({
    padding: 0,
}));

const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
    minHeight: "3.5rem",

    "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.15),
    },

    "&.active": {
        backgroundColor: alpha(theme.palette.primary.main, 0.2),
        color: theme.palette.primary.main,
        transition: "color 225ms ease-out",

        "& .MuiListItemText-primary": {
            fontWeight: 600,
        },

        "& svg": {
            color: theme.palette.primary.main,
        },
    },
}));

const ListItemIcon = styled(MuiListItemIcon)(() => ({
    minWidth: "2rem",

    "& svg": {
        fontSize: "1.5rem",
    },
}));

const ListItemText = styled(MuiListItemText)(() => ({
    fontSize: ".8725rem",
}));

export { List, ListItemIcon, ListItemButton, ListItemText, ListItem };
