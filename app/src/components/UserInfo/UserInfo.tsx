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
    flex: 2;

    display: flex;
    flex-direction: column;
    gap: 2%;

    padding: 1% 2%;

    background: white;

    border-radius: 15px;
    box-shadow: var(--shadow);
`;

export default UserInfo;
