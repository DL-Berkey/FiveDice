import { useRef, MouseEvent } from "react";

import useRegister from "@/hooks/useRegister";

const Register = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const nicknameRef = useRef<HTMLInputElement | null>(null);

    const { status, register } = useRegister();

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (
            emailRef.current === null ||
            passwordRef.current === null ||
            nicknameRef.current === null
        ) {
            return;
        }

        register({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            nickname: nicknameRef.current.value,
        });
    };

    return (
        <div>
            <div>회원가입 결과: {status}</div>
            <form>
                <input ref={nicknameRef} placeholder="nickname" />
                <input ref={emailRef} type="email" placeholder="email" />
                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="password"
                />
                <button onClick={onClick}>회원가입</button>
            </form>
        </div>
    );
};

export default Register;
