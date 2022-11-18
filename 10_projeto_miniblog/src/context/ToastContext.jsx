import { createContext, useState } from "react";

const ToastContext = createContext({ open: false, messager: "", type: "success" });

const ToastContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [messager, setMessager] = useState("");
    const [type, setType] = useState("success");

    return <ToastContext.Provider value={{ open, setOpen, messager, setMessager, type, setType }}>{children}</ToastContext.Provider>;
};

export { ToastContext, ToastContextProvider };
