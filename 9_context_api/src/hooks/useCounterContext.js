import { CounterContext } from "../context/CounterContext";
import { useContext } from "react";

const useCounterContext = () => {
    const context = useContext(CounterContext);

    if (!context) {
        return console.log("Erro no contexto useCounterContext");
    }

    return context;
};

export { useCounterContext };
