import { PageStyleContext } from "../context/PageStyleContext";
import { useContext } from "react";

const usePageStyle = () => {
    const context = useContext(PageStyleContext);

    if (!context) {
        return console.log("Erro no contexto PageStyleContext");
    }

    return context;
};

export { usePageStyle };
