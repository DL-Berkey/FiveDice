import styled from "styled-components";

import Logo from "@/components/common/Logo";
import { section, form, formRow, input, button } from "@/styles/common";

const UserDetail = () => {
    return (
        <Wrapper>
            <Logo />
            <Form>
                <FormRow>
                    <InputAlert>메롱</InputAlert>
                    <Input $invalid={false} placeholder="닉네임" />
                </FormRow>
                <SendButton>회원가입</SendButton>
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

const FormRow = styled.div`
    ${formRow}

    height: 6rem;

    & svg {
        top: 65%;
    }
`;

const InputAlert = styled.p`
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

export default UserDetail;
