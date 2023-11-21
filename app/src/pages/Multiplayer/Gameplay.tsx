import styled from "styled-components";

import { BsList, BsSearch } from "react-icons/bs";

import GameRoom from "./GameRoom";
import GameRoomSearchBar from "./GameRoomSearchBar";
import GameQuickStartBar from "./gameQuickStart/GameQuickStartBar";
import SubjectTitle from "@/components/common/SubjectTitle";

const Gameplay = () => {
    return (
        <Wrapper>
            <GameRoomNavigation>
                <SubjectTitle SVGIcon={<BsSearch />} title="찾기" />
                <GameRoomSearchBar />
            </GameRoomNavigation>
            <GameQuickStartBar />
            <GameRoomContainer>
                <SubjectTitle SVGIcon={<BsList />} title="40 게임" />
                <GameRoomList>
                    <GameRoom
                        roomNumber={127}
                        gamemode="Rankup"
                        title="대충 무지막지하게 막 긴 방 제목임 암튼 그러함"
                        owner="김현준"
                        players={1}
                        max_players={5}
                        lock={true}
                    />
                    {Array(4).fill(
                        <GameRoom
                            roomNumber={127}
                            gamemode="Rankup"
                            title="대충 무지막지하게 막 긴 방 제목임 암튼 그러함"
                            owner="김현준"
                            players={1}
                            max_players={5}
                        />
                    )}
                </GameRoomList>
            </GameRoomContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 1% 15%;
`;

const GameRoomNavigation = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 12%;
`;

const GameRoomContainer = styled.div`
    width: 100%;
    height: 65%;

    overflow: hidden;
`;

const GameRoomList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 8rem;
    row-gap: 4%;
    column-gap: 2%;

    height: 100%;

    margin: 0 auto;
    padding: 0 2%;

    overflow: scroll;
`;

export default Gameplay;
