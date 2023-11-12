import { useState } from "react";
import { User, createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/firebaseInstanse";

import Controller from "@/firebaseInstanse/controller";

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

const useRegister = () => {
    const [registerResult, setRegisterResult] = useState<RegisterResult>({
        status: "loading",
        data: null,
    });

    const register = async (userData: RegisterData) => {
        try {
            // email duplication check
            const checkResult = await Controller.User.get(userData.email);

            if (checkResult) {
                throw new Error("User is existing");
            }

            const result = await createUserWithEmailAndPassword(
                auth,
                userData.email,
                userData.password
            );

            const user = result.user;

            // add user's data and email to Firestore
            await Controller.User.set({
                uid: user.uid,
                email: userData.email,
                nickname: userData.nickname,
            });

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

export default useRegister;
