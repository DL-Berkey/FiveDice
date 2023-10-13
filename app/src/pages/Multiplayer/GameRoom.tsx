import styled from "styled-components";
import { BsFillPersonFill, BsLockFill } from "react-icons/bs";

import { gamemode } from "@/types";

interface Props {
    room_number: number;
    gamemode: gamemode;
    title: string;
    owner: string;
    players: number;
    max_players: number;
    lock?: boolean;
}

const GameRoom = (props: Props) => {
    return (
        <Wrapper>
            <RoomData>
                <span>No. {props.room_number}</span>
                <span>{props.gamemode}</span>
            </RoomData>
            <Title>{props.title}</Title>
            <GameData>
                <div>{props.owner}</div>
                <div>
                    <span>
                        {props.players} / {props.max_players}
                    </span>
                    <BsFillPersonFill />
                </div>
            </GameData>
            <Lock isLock={props.lock ?? false}>
                <BsLockFill />
            </Lock>
        </Wrapper>
    );
};

const Wrapper = styled.li`
    position: relative;

    padding: 1% 4%;

    background: var(--blue);
    border-radius: 15px;

    box-shadow: var(--shadow);
`;

const RoomData = styled.div`
    height: calc(100% / 3);

    font-size: 1.2rem;
    font-weight: 500;

    & span {
        color: white;
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
    color: white;
`;

const GameData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: calc(100% / 3);

    padding: 0 3%;

    font-size: 0.8rem;
    color: white;

    & div {
        color: inherit;
    }

    & :last-child {
        display: flex;
        align-items: center;

        color: inherit;

        & span {
            color: inherit;
            margin-right: 0.5rem;
        }

        & svg {
            fill: white;

            transform: scale(1.3);
        }
    }
`;

const Lock = styled.div<{ isLock: boolean }>`
    position: absolute;
    top: 0;
    left: 0;

    display: ${(props) => (props.isLock ? "block" : "none")};

    width: 100%;
    height: 100%;

    background: rgba(166, 166, 166, 0.7);
    border-radius: 15px;

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
