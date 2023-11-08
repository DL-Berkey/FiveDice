import { useState } from "react";
import { User, createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/firebaseInstanse";

interface RegisterData {
    nickname: string;
    email: string;
    password: string;
}

interface RegisterSuccess {
    status: "success";
    data: User;
}
interface RegisterError {
    status: "error";
    data: null;
}

interface RegisterLoading {
    status: "loading";
    data: null;
}

type RegisterResult = RegisterSuccess | RegisterError | RegisterLoading;

export const useRegister = () => {
    const [registerResult, setRegisterResult] = useState<RegisterResult>({
        status: "loading",
        data: null,
    });

    const register = async (userData: RegisterData) => {
        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                userData.email,
                userData.password
            );

            // TODO: auto check email verify
            // TODO: add user nickname and uid to firestore

            const user = result.user;

            setRegisterResult({
                status: "success",
                data: user,
            });
        } catch (e: unknown) {
            setRegisterResult({
                status: "error",
                data: null,
            });
        }
    };
    return { ...registerResult, register };
};
