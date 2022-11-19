import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../../context/AuthContext";
import { useToastContext } from "../../../hooks/useToast";

const AuthRequired = ({ children }) => {
    const { user } = useAuthValue();
    const { addToast } = useToastContext();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!user) {
            navigate("/login");
            addToast("O usuário deve estar autenticado", "error");
        }
    }, [user, navigate, addToast]);

    return user ? children : <></>;
};

export default AuthRequired;
