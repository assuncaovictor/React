import { createContext, useState } from "react";

const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(5);

    return <CounterContext.Provider value={{ counter, setCounter }}>{children}</CounterContext.Provider>;
};

export { CounterContextProvider, CounterContext };
