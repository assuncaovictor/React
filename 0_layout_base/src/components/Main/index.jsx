import React from "react";
import { Container, Box } from "./style";

const Main = ({ open, drawerWidth }) => {
    return (
        <Container
            sx={{
                marginLeft: open ? `${drawerWidth}px` : 0,
            }}
        >
            <Box>Main</Box>
        </Container>
    );
};

export default Main;
