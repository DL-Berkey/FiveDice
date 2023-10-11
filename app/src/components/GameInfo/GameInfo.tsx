import styled from "styled-components";

import { BsPlusLg } from "react-icons/bs";

import GameRoom from "./GameRoom";
import GameRoomSearchBar from "./GameRoomSearchBar";
import GameModeSelectBar from "./GameModeSeleter/GameModeSelectBar";

const GameInfo = () => {
    return (
        <Wrapper>
            <GameRoomNavigation>
                <GameRoomCreateButton>
                    <BsPlusLg />
                    <span>Room</span>
                </GameRoomCreateButton>
                <GameRoomSearchBar />
            </GameRoomNavigation>
            <GameRoomContainer>
                <GameRoomList>
                    <GameRoom
                        room_number={127}
                        gamemode="Rankup"
                        title="대충 무지막지하게 막 긴 방 제목임 암튼 그러함"
                        owner="김현준"
                        players={1}
                        max_players={5}
                        lock={true}
                    />
                    {Array(18).fill(
                        <GameRoom
                            room_number={127}
                            gamemode="Rankup"
                            title="대충 무지막지하게 막 긴 방 제목임 암튼 그러함"
                            owner="김현준"
                            players={1}
                            max_players={5}
                        />
                    )}
                </GameRoomList>
            </GameRoomContainer>
            <GameModeSelectBar />
        </Wrapper>
    );
};

const Wrapper = styled.section`
    position: relative;

    flex: 7;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2%;

    padding: 2%;

    background: white;

    box-shadow: var(--shadow);
`;

const GameRoomNavigation = styled.nav`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 8%;
`;

const GameRoomCreateButton = styled.button`
    position: absolute;

    top: 50%;
    left: 2%;

    transform: translateY(-50%);

    display: flex;
    align-items: center;
    gap: 2%;

    width: 10%;
    height: 70%;

    padding: 0 1%;

    background: var(--blue);
    border-radius: 10px;

    & span {
        font-size: 1.4em;
        font-weight: 600;
        color: white;
    }

    & svg {
        font-size: 2em;

        fill: white;
    }
`;

const GameRoomContainer = styled.div`
    flex: 1;

    width: 95%;
    overflow: scroll;
`;

const GameRoomList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 20%;
    row-gap: 4%;
    column-gap: 6%;

    width: 100%;
    height: 100%;

    padding: 0 2%;
`;

export default GameInfo;
