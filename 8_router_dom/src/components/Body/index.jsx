import React from "react";
import Header from "../Header";
import Main from "../Main";
import Style from "./Body.module.css";

const Body = ({ children }) => {
    return (
        <div className={Style.body}>
            <Header />
            <Main>{children}</Main>
        </div>
    );
};

export default Body;
