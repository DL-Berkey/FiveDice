import { useRef, useEffect, MouseEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

import styled from "styled-components";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import useLogin from "@/hooks/useLogin";
import { ROUTER_MAP } from "@/constants";
import Logo from "@/components/common/Logo";
import { section, form, formRow, input, button } from "@/styles/common";

const Login = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const { status, resetStatus, login } = useLogin();

    const navigate = useNavigate();

    useEffect(() => {
        if (status === "success") {
            navigate(ROUTER_MAP.MULTIPLAYER, { replace: true });
        }
    });

    const onClickInput = () => {
        resetStatus();
    };

    const onClickButton = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (emailRef.current === null || passwordRef.current === null) {
            return;
        }

        login(emailRef.current.value, passwordRef.current.value);
    };

    return (
        <Wrapper>
            <Logo />
            <Alert display={status === "error" ? "block" : "none"}>
                로그인에 실패했습니다.
            </Alert>
            <Form>
                <FormRow>
                    <MdEmail />
                    <Input
                        ref={emailRef}
                        type="email"
                        placeholder="이메일"
                        onClick={onClickInput}
                    />
                </FormRow>
                <FormRow>
                    <RiLockPasswordFill />
                    <Input
                        ref={passwordRef}
                        type="password"
                        placeholder="비밀번호"
                        onClick={onClickInput}
                    />
                </FormRow>
                <LoginButton onClick={onClickButton}>로그인</LoginButton>
                <Suggestion>
                    <span>아직 계정이 없으신가요?</span>
                    <Link to={ROUTER_MAP.REGISTER}>회원가입</Link>
                </Suggestion>
            </Form>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    ${section}

    position: relative;

    width: 30%;
    height: 60%;
`;

const Alert = styled.div<{ display: "block" | "none" }>`
    position: absolute;

    display: ${(props) => props.display};

    top: 20%;

    font-size: 1.2rem;
    color: red;
`;

const Form = styled.form`
    ${form}

    margin-top: 4%;
`;

const FormRow = styled.div`
    ${formRow}
`;

const Input = styled.input`
    ${input}
`;

const LoginButton = styled.button`
    ${button}

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
