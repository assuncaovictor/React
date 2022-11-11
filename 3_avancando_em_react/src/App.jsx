import React from "react";

import Leason from "./components/content/Leason";
import Questions from "./components/content/Questions";
import FloatButton from "./components/FloatButton";

const App = () => {
    const [isLeason, setIsLeason] = React.useState(true);
    const handlePage = () => {
        setIsLeason(!isLeason);
    };

    const [theme, setTheme] = React.useState("light");

    const changeTheme = () => {
        const window = document.querySelector("html");

        if (theme === "light") {
            window.classList.remove("light");
            window.classList.add("dark");
            return setTheme("dark");
        }

        window.classList.remove("dark");
        window.classList.add("light");
        setTheme("light");
    }; // state Lift

    return (
        <>
            {isLeason ? <Leason theme={theme} /> : <Questions />}
            {/* Função como prop */}
            <div className="buttons">
                <FloatButton handleClick={changeTheme}>{theme === "light" ? "escuto" : "claro"}</FloatButton>
                <FloatButton handleClick={handlePage}>{isLeason ? "Atividade" : "Aula"}</FloatButton>
            </div>
        </>
    );
};

export default App;
