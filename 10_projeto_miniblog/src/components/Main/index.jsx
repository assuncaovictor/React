import React from "react";
import { usePageStyleContext } from "../../hooks/usePageStyleContext";
import { Container, Box } from "./style";

const Main = ({ children }) => {
    const { drawerWidth, openDrawer, hasDrawer } = usePageStyleContext();

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
