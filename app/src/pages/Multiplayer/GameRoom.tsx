import styled from "styled-components";

import { BsFillPersonFill, BsLockFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { GAMEMODE } from "@/constants";

interface Props {
    roomNumber: number;
    gamemode: GameMode;
    title: string;
    host: string;
    players: number;
    max_players: number;
    lock?: boolean;
}

const GameRoom = (props: Props) => {
    return (
        <Wrapper>
            <RoomData>
                <span>No. {props.roomNumber}</span>
                <span>{GAMEMODE[props.gamemode]}</span>
            </RoomData>
            <Title>{props.title}</Title>
            <GameData>
                <div>
                    <FaCrown />
                    <span>{props.host}</span>
                </div>
                <div>
                    <span>
                        {props.players} / {props.max_players}
                    </span>
                    <BsFillPersonFill />
                </div>
            </GameData>
            {props.lock && (
                <Lock>
                    <BsLockFill />
                </Lock>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.li`
    position: relative;

    padding: 1% 3%;

    background: white;
    border-radius: 16px;

    box-shadow: var(--shadow);

    overflow: hidden;
`;

const RoomData = styled.div`
    height: calc(100% / 3);

    font-size: 1.2rem;
    font-weight: 500;

    & span {
        color: var(--sub-accent-color);
        font-weight: bold;
    }

    & :last-child {
        float: right;
    }
`;

const Title = styled.p`
    height: calc(100% / 3);

    padding: 0 4%;

    font-size: 1.1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 2;
    letter-spacing: 0.1rem;
    color: black;
`;

const GameData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: calc((100% - 2%) / 3);

    padding: 0 3%;

    font-size: 0.8rem;
    color: black;

    & div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12%;

        width: 14%;
    }

    & div span {
        color: inherit;
        font-size: 1rem;
    }

    & div svg {
        fill: var(--sub-accent-color);

        transform: scale(1.3);
    }
`;

const Lock = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: rgba(166, 166, 166, 0.7);

    z-index: 1;

    & svg {
        position: absolute;

        top: 10%;
        left: 4%;

        fill: rgba(1, 1, 1, 1);

        transform: scale(1.3);
    }
`;

export default GameRoom;
