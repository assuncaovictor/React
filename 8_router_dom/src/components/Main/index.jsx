import React from "react";
import Search from "../Search";
import Style from "./Main.module.css";

const Main = ({ children }) => {
    return (
        <main className={Style.main}>
            <div className={Style.container}>
                <Search />
                {children}
            </div>
        </main>
    );
};

export default Main;
