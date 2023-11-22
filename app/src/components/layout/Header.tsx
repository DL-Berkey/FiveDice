import styled from "styled-components";

import Logo from "../common/Logo";

const Header = () => {
    return (
        <Wrapper>
            <Logo />
        </Wrapper>
    );
};

const Wrapper = styled.header`
    grid-area: header;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 2%;

    font-weight: 700;
`;

export default Header;
