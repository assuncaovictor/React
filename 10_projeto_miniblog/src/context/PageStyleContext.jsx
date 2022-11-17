import { createContext, useState } from "react";

const PageStyleContext = createContext();

const PageStyleContextProvider = ({ children }) => {
    const [drawerWidth] = useState(270);
    const [hasDrawer, setHasDrawer] = useState(true);
    const [openDrawer, setOpenDrawer] = useState(true);

    return (
        <PageStyleContext.Provider value={{ drawerWidth, openDrawer, setOpenDrawer, hasDrawer, setHasDrawer }}>
            {children}
        </PageStyleContext.Provider>
    );
};

export { PageStyleContext, PageStyleContextProvider };
