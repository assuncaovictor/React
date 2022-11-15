import React from "react";
import { Container, Main } from "./style";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Main";

const Body = () => {
    const drawerWidth = 270;
    const [open, setOpen] = React.useState(true);

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Container direction="row" alignItems="flex-start">
            <Header handleDrawer={handleDrawer} open={open} />
            <Main component="main">
                <Sidebar open={open} drawerWidth={drawerWidth} />
                <Content open={open} drawerWidth={drawerWidth} />
            </Main>
        </Container>
    );
};

export default Body;
