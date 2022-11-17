import { createContext, useReducer } from "react";

const TitleColorContext = createContext();

const titleColorReducer = (state, action) => {
    switch (action.type) {
        case "red":
            return { ...state, color: "red" };
        case "green":
            return { ...state, color: "green" };
        case "blue":
            return { ...state, color: "blue" };
        default:
            return { ...state, color: "black" };
    }
};

const TileColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });
    return <TitleColorContext.Provider value={{ ...state, dispatch }}> {children}</TitleColorContext.Provider>;
};

export { TitleColorContext, TileColorContextProvider };
