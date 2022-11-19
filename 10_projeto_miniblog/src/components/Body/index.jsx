import React from "react";
import { Container, Main } from "./style";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Content from "../Main";

import { usePageStyle } from "../../hooks/usePageStyle";

const Body = ({ children, hasDrawer = true }) => {
    const { setHasDrawer } = usePageStyle();

    React.useEffect(() => {
        setHasDrawer(hasDrawer);
    }, [setHasDrawer, hasDrawer]);

    return (
        <Container direction="row" alignItems="flex-start">
            <Header />
            <Main component="main">
                <Sidebar />
                <Content>{children}</Content>
            </Main>
        </Container>
    );
};

export default Body;
