import React from "react";
import { Link } from "react-router-dom";
import sidebar from "../../config/router/sidebar";
import Style from "./Header.module.css";

const Header = () => {
    return (
        <header className={Style.header}>
            <nav>
                <ul className={Style.list}>
                    {sidebar.map(({ path, name }) => (
                        <li key={name} className={Style.item}>
                            <Link to={path} className={`${Style.link} ${window.location.pathname.includes(path) && Style.active}`}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

// window.location.pathname.includes(path)
