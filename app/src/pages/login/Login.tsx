import { useRef, MouseEvent } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import useLogin from "@/hooks/useLogin";
import Logo from "@/components/common/Logo";
import Button from "@/styles/Button";
import { ROUTER_MAP } from "@/constants";

const Login = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const { loginResult, login } = useLogin();

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (emailRef.current === null || passwordRef.current === null) {
            return;
        }

        // 성공 결과 값 넘겨줘서 게임플레이로 리다이렉트
        login(emailRef.current.value, passwordRef.current.value);
    };

    return (
        <Wrapper>
            <Logo />
            <Alert display={loginResult?.status === "error" ? "block" : "none"}>
                로그인에 실패했습니다.
            </Alert>
            <Form>
                <InputWrapper>
                    <MdEmail />
                    <Input
                        id="email"
                        ref={emailRef}
                        type="email"
                        placeholder="이메일"
                    />
                </InputWrapper>
                <InputWrapper>
                    <RiLockPasswordFill />
                    <Input
                        id="password"
                        ref={passwordRef}
                        type="password"
                        placeholder="비밀번호"
                    />
                </InputWrapper>
                <LoginButton onClick={onClick}>로그인</LoginButton>
                <Suggestion>
                    <span>아직 계정이 없으신가요?</span>
                    <Link to={ROUTER_MAP.REGISTER}>회원가입</Link>
                </Suggestion>
            </Form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2%;

    width: 30%;
    height: 60%;

    margin-bottom: 8%;

    background: white;

    box-shadow: var(--shadow);
`;

const Alert = styled.div<{ display: "block" | "none" }>`
    position: absolute;

    display: ${(props) => props.display};

    top: 20%;

    font-size: 1.2rem;
    color: red;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8%;

    width: 100%;
    height: 60%;

    margin-top: 10%;
`;

const InputWrapper = styled.div`
    position: relative;

    width: 64%;
    height: 16%;

    & svg {
        position: absolute;
        top: 50%;
        left: 4%;

        transform: translateY(-50%) scale(1.4);

        fill: var(--sub-accent-color);
    }
`;

const Input = styled.input`
    width: 100%;
    height: 100%;

    padding-left: 12%;

    font-size: 1.2rem;

    outline: 1px solid var(--sub-accent-color);
`;

const LoginButton = styled.button`
    ${Button}

    color: white;
    width: 20%;
`;

const Suggestion = styled.div`
    width: 50%;

    margin: 0 auto;

    & a {
        float: right;

        color: var(--accent-color);
        text-decoration: underline solid var(--accent-color);
    }
`;

export default Login;
