import React from "react";
import { NavLink } from "react-router-dom";
import sidebar from "../../config/router/sidebar";
import Style from "./Header.module.css";

const Header = () => {
    return (
        <header className={Style.header}>
            <nav>
                <ul className={Style.list}>
                    {sidebar.map(({ path, name }) => (
                        <li key={name} className={Style.item}>
                            <NavLink
                                isActive={path}
                                to={path}
                                className={({ isActive }) => (isActive ? `${Style.active} ${Style.link}` : Style.link)}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

// window.location.pathname.includes(path)
