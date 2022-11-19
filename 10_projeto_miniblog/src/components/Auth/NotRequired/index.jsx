import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../../context/AuthContext";
import { useToastContext } from "../../../hooks/useToast";

const AuthNotRequired = ({ children }) => {
    const { user } = useAuthValue();
    const { addToast } = useToastContext();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (user) {
            navigate("/home");
            addToast("O usuário já está logado", "error");
        }
    }, [user, navigate, addToast]);

    return !user ? children : <></>;
};

export default AuthNotRequired;
