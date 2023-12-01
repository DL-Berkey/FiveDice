import { useEffect } from "react";
import {
    useParams,
    useNavigate,
    useLocation,
    Navigate,
} from "react-router-dom";
import { useRecoilValue } from "recoil";

import { isLoginAtom } from "@/recoil/atom";
import AuthPhase from "./AuthPhase";
import UserDetail from "./UserDetail";
import { ROUTER_MAP } from "@/constants";

const Register = () => {
    const { phase } = useParams<{ phase: string }>();

    const navigate = useNavigate();

    const { state } = useLocation() as { state: { auth: boolean } };

    const isLogin = useRecoilValue(isLoginAtom);

    useEffect(() => {
        // 로그인 했을 시에는 회원가입 페이지로 접근 금지
        if (isLogin) {
            navigate(ROUTER_MAP.NOTICE, { replace: true });
        }
    });

    if (phase === "1") {
        return <AuthPhase />;
    } else if (phase === "2" && state?.auth) {
        return <UserDetail />;
    } else {
        return <Navigate to={ROUTER_MAP.NOTICE} replace />;
    }
};

export default Register;
