import { useForm } from "react-hook-form";
import { useNavigate, Navigate, Link } from "react-router-dom";
import styled from "styled-components";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdCheckmarkCircle } from "react-icons/io";

import useRegister from "@/hooks/useRegister";
import { error, success } from "@/utils/toastWrapper";
import { EMAIL_REGEX, PASSWORD_REGEX, ROUTER_MAP } from "@/constants";
import { form, formRow, input, button } from "@/styles/common";

type InputType = "email" | "password" | "confirmPassword";

type Validation = "ok" | "notok";

type VALIDATION_TEXT = Record<Validation, string>;

const VALIDATION_TEXT_MAP: Record<InputType, VALIDATION_TEXT> = {
    email: {
        ok: "사용 가능한 이메일 형식입니다.",
        notok: "사용할 수 없는 이메일 형식입니다.",
    },
    password: {
        ok: "사용 가능한 비밀번호입니다.",
        notok: "영문자, 숫자, 6글자가 포함되어야 합니다.",
    },
    confirmPassword: {
        ok: "비밀번호와 일치합니다.",
        notok: "비밀번호와 일치하지 않습니다.",
    },
};

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {
    // form의 관리를 위한 useForm
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm<FormData>({
        mode: "onChange",
        defaultValues: { email: "", password: "", confirmPassword: "" },
    });

    // useForm의 watch를 이용해서 가져온 각 input의 value
    const emailValue = watch("email");
    const passwordValue = watch("password");
    const confirmPasswordValue = watch("confirmPassword");

    // react-router-dom의 훅
    const navigate = useNavigate();

    // 회원가입 처리를 위한 커스텀 훅
    const [status, signUp] = useRegister();

    // submit 함수
    const onSubmit = handleSubmit(async (data) => {
        const signUpResult = await signUp(data.email, data.password);

        if (signUpResult.signUpStatus === "success") {
            success("이메일로 인증코드를 발송했습니다.");

            // TODO: 링크 변경 => 회원가입 완료, 링크 인증 유도 사이트로 보내기!
            // navigate("", {
            //     state: {
            //         auth: true,
            //     },
            // });
        } else if (signUpResult.signUpStatus === "user already exists") {
            error("사용할 수 없는 이메일입니다.");
        } else {
            error("인증코드 전송에 실패했습니다.");
        }
    });

    return (
        <>
            {status !== "success" ? (
                <Form onSubmit={onSubmit}>
                    <FormRow>
                        <Label>
                            {/* 사용 불가능한 이메일에 대한 텍스트 */}
                            {errors.email && VALIDATION_TEXT_MAP.email.notok}

                            {/* 사용 가능한 이메일에 대한 텍스트 */}
                            {!errors.email &&
                                emailValue !== "" &&
                                VALIDATION_TEXT_MAP.email.ok}
                        </Label>
                        <MdEmail />
                        <Input
                            id="email"
                            type="email"
                            placeholder="이메일"
                            $invalid={errors.email?.type === "pattern"}
                            {...register("email", {
                                required: true,
                                pattern: EMAIL_REGEX,
                            })}
                        />
                    </FormRow>
                    <FormRow>
                        <Label>
                            {/* 사용 불가능한 비밀번호에 대한 텍스트 */}
                            {errors.password &&
                                errors.password.type === "pattern" &&
                                VALIDATION_TEXT_MAP.password.notok}

                            {/* 사용 가능한 비밀번호에 대한 텍스트 */}
                            {!errors.password &&
                                passwordValue !== "" &&
                                VALIDATION_TEXT_MAP.password.ok}
                        </Label>
                        <RiLockPasswordFill />
                        <Input
                            id="password"
                            type="password"
                            placeholder="비밀번호"
                            {...register("password", {
                                required: true,
                                pattern: PASSWORD_REGEX,
                            })}
                            $invalid={errors.password?.type === "pattern"}
                        />
                    </FormRow>
                    <FormRow>
                        <Label>
                            {/* 비밀번호와 불일치에 대한 텍스트 */}
                            {errors.confirmPassword &&
                                errors.confirmPassword.type === "validate" &&
                                VALIDATION_TEXT_MAP.confirmPassword.notok}

                            {/* 비밀번호와 일치에 대한 텍스트 */}
                            {!errors.confirmPassword &&
                                confirmPasswordValue !== "" &&
                                VALIDATION_TEXT_MAP.confirmPassword.ok}
                        </Label>
                        <IoMdCheckmarkCircle />
                        <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="비밀번호 확인"
                            {...register("confirmPassword", {
                                required: true,
                                validate: (value) => value === passwordValue,
                            })}
                            $invalid={
                                errors.confirmPassword?.type === "validate"
                            }
                        />
                    </FormRow>
                    <SendButton disabled={!isValid}>인증코드 발송</SendButton>
                </Form>
            ) : (
                <>
                    <h2>회원가입에 성공했습니다!</h2>
                    <p>
                        반드시 이메일로 전송된 인증 링크를 통해 계정 인증을
                        해주세요.
                    </p>
                    <Link to={ROUTER_MAP.notice} replace>
                        공지로 돌아가기
                    </Link>
                </>
            )}
        </>
    );
};

const Form = styled.form`
    ${form}

    gap: 6%;
`;

const FormRow = styled.div`
    ${formRow}

    height: 6rem;

    & svg {
        top: 65%;
    }
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
        background: var(--disabled-color);
    }
`;

export default Register;
