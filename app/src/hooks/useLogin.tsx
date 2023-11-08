import { useState } from "react";
import { User, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/firebaseInstanse";

interface LoginSuccess {
    status: "success";
    data: User;
}
interface LoginError {
    status: "error";
    data: null;
}

type LoginResult = LoginSuccess | LoginError;

const useLogin = () => {
    const [loginResult, setLoginResult] = useState<LoginResult | null>(null);

    const login = async (email: string, password: string) => {
        try {
            const result = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = result.user;

            // TODO: 쿠키에 user 정보 집어넣기

            setLoginResult({
                status: "success",
                data: user,
            });
        } catch (e: unknown) {
            setLoginResult({
                status: "error",
                data: null,
            });
        }
    };

    return { loginResult, login };
};

export default useLogin;
