import React from "react";
import Style from "./Main.module.css";

const Main = ({ children }) => {
    return (
        <main className={Style.main}>
            <div className={Style.container}>{children}</div>
        </main>
    );
};

export default Main;
