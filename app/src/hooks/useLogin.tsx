import { useState } from "react";

import User from "@/supabaseConfig/service";
import { isLoginAtom, userDataAtom } from "@/recoil/atom";
import { useSetRecoilState } from "recoil";

const useLogin = () => {
    const [status, setStatus] = useState<"success" | "error" | "pending">(
        "pending"
    );

    const setIsLoginAtom = useSetRecoilState(isLoginAtom);
    const setUserData = useSetRecoilState(userDataAtom);

    const setPendingStatus = () => {
        if (status === "error") {
            setStatus("pending");
        }
    };

    const login = async (email: string, password: string) => {
        try {
            // Datadate에 user data가 존재하는지 확인
            const userData = await User.getUserByEmail(email);

            if (!userData) {
                throw new Error("user'data not found");
            }

            await User.login(email, password);

            setIsLoginAtom(true);
            setUserData({ nickname: userData.nickname });
            setStatus("success");
        } catch (e: unknown) {
            console.error(e);
            setStatus("error");
        }
    };

    return { status, setPendingStatus, login };
};

export default useLogin;
