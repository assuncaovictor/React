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

    return {
        auth,
        createUser,
        authError,
        logout,
    };
};

export default useAuthentication;
