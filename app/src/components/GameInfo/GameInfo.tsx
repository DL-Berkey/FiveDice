import styled from "styled-components";

import GameRoom from "./GameRoom";
import GameRoomSearchBar from "./GameRoomSearchBar";

const GameInfo = () => {
    return (
        <Wrapper>
            <GameRoomSearchBar />
            <GameRoomContainer>
                <GameRoomList>{Array(18).fill(<GameRoom />)}</GameRoomList>
            </GameRoomContainer>
            <GameModeContainer>
                <GameModeButton>Rank</GameModeButton>
                <GameModeButton>Normal</GameModeButton>
                <GameModeButton>Unlimited</GameModeButton>
            </GameModeContainer>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    flex: 7;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 95%;

    padding: 2%;

    background: white;

    box-shadow: var(--shadow);
`;

const GameRoomContainer = styled.div`
    max-height: 82%;
`;

const GameRoomList = styled.ul`
    // 게임룸 먼저만들고 카드로 할지,뭘로할지 정하기

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 18%;
    grid-auto-flow: row;
    row-gap: 3%;
    column-gap: 2%;

    width: 100%;
    height: 100%;

    overflow-y: scroll;
`;

const GameModeContainer = styled.div`
    width: 40%;
    height: 6%;

    border-radius: 10px;
    background: var(--blue);
`;

const GameModeButton = styled.button`
    position: relative;

    width: calc(100% / 3);
    height: 100%;

    font-size: 1.8rem;
    font-weight: 700;
    color: white;

    background: transparent;

    & + & {
        &::before {
            content: "";

            position: absolute;

            left: 0;

            width: 3px;
            height: 70%;

            background: white;
        }
    }
`;

export default GameInfo;
