import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Stack";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";
import Navbar from "./Navbar";
import { usePageStyleContext } from "../../hooks/context";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
    const { hasDrawer, openDrawer, setOpenDrawer, drawerWidth } = usePageStyleContext();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <AppBar position="fixed">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Stack direction="row" alignItems="center">
                    <Stack direction="row" alignItems="center" sx={{ width: `calc(${drawerWidth}px - 1.5rem)` }}>
                        {hasDrawer && (
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                                onClick={handleDrawer}
                            >
                                {openDrawer ? <MenuOpenIcon /> : <MenuIcon />}
                            </IconButton>
                        )}
                        <Link component={RouterLink} to="/home" sx={{ textDecoration: "none", color: "inherit" }}>
                            <Typography variant="h6" noWrap component="div">
                                Mini <span style={{ fontWeight: 800 }}>BLOG</span>
                            </Typography>
                        </Link>
                    </Stack>

                    <Search onSubmit={handleSubmit}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Pesquisar..." inputProps={{ "aria-label": "search" }} />
                    </Search>
                </Stack>

                <Navbar />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
