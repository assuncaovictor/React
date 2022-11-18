import { ToastContext } from "../context/ToastContext";
import { useContext } from "react";

const useToastContext = () => {
    const context = useContext(ToastContext);

    if (!context) {
        return console.log("Erro no contexto ToastContext");
    }

    const addToast = (messager, type) => {
        const { setOpen, setMessager, setType } = context;
        setOpen(true);
        setMessager(messager);
        setType(type);
    };

    return { ...context, addToast };
};

export { useToastContext };
