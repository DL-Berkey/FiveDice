import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import useRegister from "@/hooks/useRegister";
import { error, success } from "@/utils/toastWrapper";
import { checkEmail, checkPassword } from "@/utils/checkInputValue";
import Logo from "@/components/common/Logo";
import { section, form, inputWrapper, input, button } from "@/styles/common";
import { ROUTER_MAP } from "@/constants";

type InputType = "email" | "password" | "confirmPassword";

type Validation = "ok" | "notok" | "empty";

type VALIDATION_TEXT = Record<Validation, string>;

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
    emailValidation: Validation;
    passwordValidation: Validation;
    confirmPasswordValidation: Validation;
    disabledButton: boolean;
}

const VALIDATION_TEXT_MAP: Record<InputType, VALIDATION_TEXT> = {
    email: {
        ok: "사용 가능한 이메일 형식입니다.",
        notok: "사용할 수 없는 이메일 형식입니다.",
        empty: "",
    },
    password: {
        ok: "사용 가능한 비밀번호입니다.",
        notok: "영문자, 숫자, 6글자가 포함되어야 합니다.",
        empty: "",
    },
    confirmPassword: {
        ok: "비밀번호와 일치합니다.",
        notok: "비밀번호와 일치하지 않습니다.",
        empty: "",
    },
};

const AuthPhase = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        confirmPassword: "",
        emailValidation: "empty",
        passwordValidation: "empty",
        confirmPasswordValidation: "empty",
        disabledButton: true,
    });

    const navigate = useNavigate();

    const { status, register } = useRegister();

    useEffect(() => {
        if (status === "success") {
            success("이메일로 인증코드를 발송했습니다.");

            navigate(ROUTER_MAP.REGISTER.origin + "/2", {
                state: {
                    auth: true,
                },
            });
        }

        if (status === "error") {
            error("이미 사용중인 이메일입니다.");
        }
    }, [status]);

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;

        if (value === "") {
            setFormData((prev) => ({
                ...prev,
                email: value,
                emailValidation: "empty",
            }));

            return;
        }

        const checkResult = checkEmail(value);

        setFormData((prev) => ({
            ...prev,
            email: value,
            emailValidation: checkResult ? "ok" : "notok",
            disabledButton: !(
                (checkResult ? "ok" : "notok") &&
                prev.passwordValidation === "ok" &&
                prev.confirmPasswordValidation === "ok"
            ),
        }));
    };

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;

        if (value === "") {
            setFormData((prev) => ({
                ...prev,
                password: value,
                passwordValidation: "empty",
            }));

            return;
        }

        const checkResult = checkPassword(value);

        setFormData((prev) => ({
            ...prev,
            password: value,
            passwordValidation: checkResult ? "ok" : "notok",
            disabledButton: !(
                (checkResult ? "ok" : "notok") &&
                prev.emailValidation === "ok" &&
                prev.confirmPasswordValidation === "ok"
            ),
        }));
    };

    const onChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;

        if (value === "") {
            setFormData((prev) => ({
                ...prev,
                confirmPassword: value,
                confirmPasswordValidation: "empty",
            }));

            return;
        }

        setFormData((prev) => ({
            ...prev,
            confirmPassword: value,
            confirmPasswordValidation: prev.password === value ? "ok" : "notok",
            disabledButton: !(
                (prev.password === value ? "ok" : "notok") &&
                prev.emailValidation === "ok" &&
                prev.passwordValidation === "ok"
            ),
        }));
    };

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (
            formData.emailValidation === "ok" &&
            formData.passwordValidation === "ok" &&
            formData.confirmPasswordValidation === "ok"
        ) {
            register(formData.email, formData.password);
        }
    };

    return (
        <Wrapper>
            <Logo />
            <Form>
                <InputWrapper>
                    <Label htmlFor="email">
                        {VALIDATION_TEXT_MAP.email[formData.emailValidation]}
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="이메일"
                        onChange={onChangeEmail}
                        $invalid={formData.emailValidation === "notok"}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="password">
                        {
                            VALIDATION_TEXT_MAP.password[
                                formData.passwordValidation
                            ]
                        }
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="비밀번호"
                        onChange={onChangePassword}
                        $invalid={formData.passwordValidation === "notok"}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="confirmPassword">
                        {
                            VALIDATION_TEXT_MAP.confirmPassword[
                                formData.confirmPasswordValidation
                            ]
                        }
                    </Label>
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="비밀번호 확인"
                        onChange={onChangeConfirmPassword}
                        $invalid={
                            formData.confirmPasswordValidation === "notok"
                        }
                    />
                </InputWrapper>
                <SendButton
                    disabled={formData.disabledButton}
                    onClick={onClick}
                >
                    인증코드 발송
                </SendButton>
            </Form>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    ${section}

    height: 60%;
`;

const Form = styled.form`
    ${form}

    gap: 6%;
`;

const InputWrapper = styled.div`
    ${inputWrapper}

    height: 5rem;
`;

const Label = styled.label`
    display: block;

    height: 30%;
`;

const Input = styled.input<{ $invalid: boolean }>`
    ${input};

    height: 70%;

    border: 2px solid
        ${(props) =>
            props.$invalid ? "var(--red)" : "var(--sub-accent-color)"};

    &:focus {
        outline: none;
    }
`;

const SendButton = styled.button`
    ${button}

    width: fit-content;

    padding: 1% 2%;

    font-size: 1.2rem;
    color: white;

    &:disabled {
        background: var(--disabled-accent-color);
        background: red;
    }
`;

export default AuthPhase;
