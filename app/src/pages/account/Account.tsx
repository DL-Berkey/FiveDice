import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Logo from "@/components/common/Logo";

const Account = () => {
    return (
        <Wrapper>
            <Logo />
            <Outlet />
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2%;

    width: 30%;
    height: 60%;

    margin-bottom: 8%;
    padding: 2% 0;

    background: white;

    box-shadow: var(--shadow);
`;

export default Account;
