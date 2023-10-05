import styled from "styled-components";

import GameRoom from "./GameRoom";
import GameRoomSearchBar from "./GameRoomSearchBar";
import GameModeSelectBar from "./GameModeSelectBar";

const GameInfo = () => {
    return (
        <Wrapper>
            <GameRoomSearchBar />
            <GameRoomContainer>
                <GameRoomList>{Array(18).fill(<GameRoom />)}</GameRoomList>
            </GameRoomContainer>
            <GameModeSelectBar />
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

export default GameInfo;
