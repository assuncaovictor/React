import { TitleColorContext } from "../context/TitleColorContext";
import { useContext } from "react";

const useTitleColorContext = () => {
    const context = useContext(TitleColorContext);

    if (!context) {
        return console.log("Erro no contexto useTitleColorContext");
    }

    return context;
};

export { useTitleColorContext };
