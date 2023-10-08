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
    gap: 4%;

    height: 85%;

    padding: 1% 2%;

    background: white;

    box-shadow: var(--shadow);
`;

export default UserInfo;
