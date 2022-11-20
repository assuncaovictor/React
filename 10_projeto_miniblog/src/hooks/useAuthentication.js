import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useState } from "react";

const useAuthentication = () => {
    const [authError, setAuthError] = useState("");

    const auth = getAuth();

    const createUser = async ({ name, email, password }) => {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(user, {
                displayName: name,
            });
        } catch (e) {
            setAuthError(e.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    const login = async ({ email, password }) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (e) {
            setAuthError("E-mail ou senha inválidos");
        }
    };

    return {
        auth,
        createUser,
        authError,
        logout,
        login,
    };
};

export default useAuthentication;
