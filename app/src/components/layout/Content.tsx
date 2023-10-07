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
    display: flex;
    gap: 2%;

    height: 92%;

    padding: 0 2% 4% 2%;
`;

export default Content;
