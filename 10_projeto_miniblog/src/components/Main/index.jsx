import React from "react";
import { usePageStyle } from "../../hooks/usePageStyle";
import { Container, Box } from "./style";

const Main = ({ children }) => {
    const { drawerWidth, openDrawer, hasDrawer } = usePageStyle();

    return (
        <Container
            sx={{
                marginLeft: openDrawer && hasDrawer ? `${drawerWidth}px` : 0,
            }}
        >
            <Box>{children}</Box>
        </Container>
    );
};

export default Main;
