import styled, { css } from "styled-components";

import GameRoom from "./GameRoom";

const GameInfo = () => {
    return (
        <Wrapper>
            <UpperContainer>
                <PracticeButton>Practice</PracticeButton>
                <RuleButton>Rule</RuleButton>
            </UpperContainer>
            <GameRoomContainer>
                <GameRoomList>{Array(18).fill(<GameRoom />)}</GameRoomList>
                {/* <GameRoomListNavigator>
                    <RefreshButton></RefreshButton>
                    <PreviousButton>이전</PreviousButton>
                    <NextButton>다음</NextButton>
                </GameRoomListNavigator> */}
            </GameRoomContainer>
            <GameModeContainer>
                <GameModeButton>Rank</GameModeButton>
                <GameModeButton>Normal</GameModeButton>
                <GameModeButton>Unlimited</GameModeButton>
            </GameModeContainer>
        </Wrapper>
    );
};

const UpperButton = css`
    width: 15%;
    height: 100%;

    font-size: 1.5rem;
    font-weight: 700;
    color: white;

    border-radius: 20px;
    background: var(--blue);
`;

const Wrapper = styled.section`
    flex: 7;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 95%;

    padding: 2%;

    background: white;

    border-radius: 15px;
    box-shadow: var(--shadow);
`;

const UpperContainer = styled.div`
    width: 100%;
    height: 6%;

    margin-bottom: 3%;
`;

const PracticeButton = styled.button`
    ${UpperButton};
`;

const RuleButton = styled.button`
    float: right;

    ${UpperButton};
`;

const GameRoomContainer = styled.div`
    flex: 1;

    width: 90%;
`;

const GameRoomList = styled.ul`
    // 게임룸 먼저만들고 카드로 할지,뭘로할지 정하기

    /* display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap; */
    /* gap: 2%; */

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 25%;
    grid-auto-flow: row;
    row-gap: 3%;
    column-gap: 2%;

    width: 100%;
    height: 100%;

    overflow-y: scroll;

    // why to set for button of child
    & :nth-child(2n) {
        /* margin-left: 3%; */
    }

    //
`;

const GameRoomListNavigator = styled.div``;

const RefreshButton = styled.button``;

const PreviousButton = styled.button``;
const NextButton = styled.button``;

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
