import { useRecoilState, useResetRecoilState } from "recoil";

import { isLoginAtom, userDataAtom } from "@/recoil/atom";
import User from "@/supabaseConfig/service";

const useLogout = () => {
    const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
    const resetUserData = useResetRecoilState(userDataAtom);

    const logout = async () => {
        try {
            if (!isLogin) {
                return;
            }

            await User.logout();

            resetUserData();
            setIsLogin(false);
        } catch (e: unknown) {
            console.error(e);
        }
    };

    return { isLogin, logout };
};

export default useLogout;
