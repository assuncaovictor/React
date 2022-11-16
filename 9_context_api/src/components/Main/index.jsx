import React from "react";
import { Container, Box } from "./style";

const Main = ({ open, drawerWidth, children }) => {
    return (
        <Container
            sx={{
                marginLeft: open ? `${drawerWidth}px` : 0,
            }}
        >
            <Box>{children}</Box>
        </Container>
    );
};

export default Main;
