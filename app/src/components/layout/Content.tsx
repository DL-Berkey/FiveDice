import styled from "styled-components";
import GameInfo from "../GameInfo";
import UserInfo from "../UserInfo";

const Content = () => {
    return (
        <Wrapper>
            <GameInfo />
            <UserInfo />
        </Wrapper>
    );
};

const Wrapper = styled.main`
    flex-grow: 1;

    display: flex;
    justify-content: center;
    gap: 3%;
`;

export default Content;
