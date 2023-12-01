// import styled from "styled-components";
import LevelInfo from "./LevelInfo";
import ScoreList from "./ScoreList";
import MatchRecord from "./MatchRecord";

const UserInfo = () => {
    return (
        <>
            <LevelInfo />
            <ScoreList />
            <MatchRecord />
        </>
    );
};

// const Wrapper = styled.section`
//     flex: 2;

//     display: flex;
//     flex-direction: column;
//     gap: 4%;

//     height: 85%;

//     padding: 1% 2%;
// `;

export default UserInfo;
