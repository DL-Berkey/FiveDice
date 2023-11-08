import { useRef, MouseEvent } from "react";

import useLogin from "@/hooks/useLogin";

const Login = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const { loginResult, login } = useLogin();

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (emailRef.current === null || passwordRef.current === null) {
            return;
        }

        login(emailRef.current.value, passwordRef.current.value);
    };

    return (
        <div>
            <div>로그인 결과: {loginResult?.status}</div>
            <form>
                <input ref={emailRef} type="email" placeholder="email" />
                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="password"
                />
                <button onClick={onClick}>로그인</button>
            </form>
        </div>
    );
};

export default Login;
