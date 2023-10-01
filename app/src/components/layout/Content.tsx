import styled from "styled-components";

import Menu from "../Menu/Menu";
import GameInfo from "../GameInfo/GameInfo";
import UserInfo from "../UserInfo/UserInfo";

const Content = () => {
    return (
        <Wrapper>
            <Menu />
            <GameInfo />
            <UserInfo />
        </Wrapper>
    );
};

const Wrapper = styled.main`
    flex-grow: 1;

    display: flex;
    justify-content: center;
    gap: 2%;

    padding: 0 2%;
`;

export default Content;
