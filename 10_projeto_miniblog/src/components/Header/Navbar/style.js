import { styled } from "@mui/material/styles";
import MuiList from "@mui/material/List";
import MuiListItemButton from "@mui/material/ListItemButton";

const List = styled(MuiList)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: ".75rem",
    marginLeft: "2rem",
}));

const ListItemButton = styled(MuiListItemButton)(() => ({
    padding: ".25rem .5rem",
    "&.active": {
        fontWeight: "700 !important",
        borderBottom: `1px solid white`,
    },
}));

export { List, ListItemButton };
