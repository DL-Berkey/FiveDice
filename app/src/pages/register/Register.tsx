import { useRef, useState, useDeferredValue, MouseEvent } from "react";

import useRegister from "@/hooks/useRegister";
import { checkEmail, checkPassword } from "@/utils/check";

const Register = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const nicknameRef = useRef<HTMLInputElement | null>(null);

    const [isAvailableEmail, setIsAvailableEmail] = useState<boolean>(false);
    const deferredIsAvailableEmail = useDeferredValue(isAvailableEmail);

    const [isAvailablePassword, setIsAvailablePassword] =
        useState<boolean>(false);
    const deferredIsAvailablePassword = useDeferredValue(isAvailablePassword);

    const { status, register } = useRegister();

    const onClickComfirm = (e: MouseEvent<HTMLButtonElement>) => {
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

    const onChangeEmailInput = () => {
        if (!emailRef.current || emailRef.current.value === "") {
            setIsAvailableEmail(false);

            return;
        }

        const result = checkEmail(emailRef.current.value);

        if (result) {
            setIsAvailableEmail(true);
        } else {
            setIsAvailableEmail(false);
        }
    };

    const onChangePasswordInput = () => {
        if (!passwordRef.current || passwordRef.current.value === "") {
            setIsAvailablePassword(false);

            return;
        }

        const result = checkPassword(passwordRef.current.value);

        if (result) {
            setIsAvailablePassword(true);
        } else {
            setIsAvailablePassword(false);
        }
    };

    return (
        <div>
            <div>회원가입 결과: {status}</div>
            <form>
                <input name="email" ref={nicknameRef} placeholder="nickname" />
                <label htmlFor="email">
                    유효한 이메일 형식: {deferredIsAvailableEmail ? "O" : "X"}
                </label>
                <input
                    name="email"
                    ref={emailRef}
                    type="email"
                    placeholder="email"
                    onChange={onChangeEmailInput}
                />
                <button>인증코드 발송</button>
                <label htmlFor="password">
                    유효한 패스워드: {deferredIsAvailablePassword ? "O" : "X"}
                </label>
                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="password"
                    onChange={onChangePasswordInput}
                />
                <button onClick={onClickComfirm}>회원가입</button>
            </form>
        </div>
    );
};

export default Register;
