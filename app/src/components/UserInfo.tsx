import styled from "styled-components";
import LevelInfo from "./LevelInfo";
import ScoreList from "./ScoreList";
import MatchRecord from "./MatchRecord";

const UserInfo = () => {
    return (
        <Wrapper>
            <LevelInfo />
            <ScoreList />
            <MatchRecord />
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;

    width: 20%;
    height: 95%;

    padding: 1% 2%;

    border-radius: 15px;
    box-shadow: var(--shadow);
`;

export default UserInfo;
