import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useState } from "react";

const useAuthentication = () => {
    const [error, setError] = useState("");

    const auth = getAuth();

    const createUser = async ({ name, email, password }) => {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(user, {
                displayName: name,
            });
        } catch (e) {
            setError(e.messager);
        }
    };

    return {
        auth,
        createUser,
        error,
    };
};

export default useAuthentication;
