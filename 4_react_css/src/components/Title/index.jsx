import React from "react";
import "./index.css";

const Title = ({ children, component, className }) => {
    return component === "h1" ? <h1 className={className || "title"}>{children}</h1> : <h2 className={className}>{children}</h2>; // css de componentes
};

export default Title;
