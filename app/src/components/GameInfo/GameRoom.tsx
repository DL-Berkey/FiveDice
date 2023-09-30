import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";

const GameRoom = () => {
    return (
        <Wrapper>
            <RoomNum>No. 127</RoomNum>
            <Title>대충 엄청 긴 방 이름인데 이제 어떻게 되려나</Title>
            <Mode>Mode</Mode>
            <Players>1 / 2</Players>
            <JoinButton>
                <AiOutlineRight />
            </JoinButton>
        </Wrapper>
    );
};

const Wrapper = styled.li`
    display: inline-grid;
    grid-template-areas:
        "room_num . join"
        "title title join"
        "mode players join";
    grid-template-columns: 5fr 1fr 1fr;
    grid-template-rows: 2fr 5fr 2fr;
    align-items: center;

    /* width: 33%; */
    /* height: 20%; */

    padding-left: 2%;

    border: 2px solid var(--blue);
    border-radius: 20px;

    overflow: hidden;
`;

const RoomNum = styled.div`
    grid: room_num;

    font-size: 1.2rem;
    color: rgb(166, 166, 166);
`;

const Title = styled.div`
    grid-area: title;

    width: 100%;
    height: fit-content;

    /* margin-left: 3%; */

    font-size: 1.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const JoinButton = styled.button`
    grid-area: join;

    height: 100%;

    font-size: 1.9rem;
    font-weight: 700;
    color: white;

    background: var(--blue);

    & > svg {
        width: 70%;
        height: 70%;

        fill: white;
    }
`;

const Mode = styled.div`
    grid-area: mode;

    color: rgb(166, 166, 166);
`;

const Players = styled.div`
    grid-area: players;

    color: rgb(166, 166, 166);
`;

export default GameRoom;
