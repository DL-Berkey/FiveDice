import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { BsXLg } from "react-icons/bs";

import { GameMode } from "@/types";

const GameBoard = () => {
    const location = useLocation();
    const state = location.state as { GameMode: GameMode };

    return (
        <Wrapper>
            <Navigation>
                <div>{state.GameMode}</div>
                <div>나의 게임</div>
                <button>
                    <BsXLg />
                </button>
            </Navigation>
            <table></table>
            <div>
                <button>굴리기</button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 30%;
    height: 90%;

    background: white;

    box-shadow: var(--shadow);
`;

const Navigation = styled.nav`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    position: relative;

    height: 8%;

    background: var(--blue);

    & :not(:first-child, :last-child) {
        /* width: 30%; */
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        font-size: 1.5rem;
        color: white;
    }

    & :first-child {
        /* position: absolute;
        top: 0;
        left: 0; */
        float: left;

        padding-left: 2%;

        font-size: 1rem;
        color: white;
    }

    & :last-child {
        /* position: absolute;
        top: 0;
        right: 0; */
        float: right;

        width: fit-content;
        height: fit-content;

        padding: 1%;

        background: var(--red);
        border-radius: 0 0 0 8px;

        & svg {
            border: none;

            transform: scale(1.5);

            fill: white;
        }
    }
`;

export default GameBoard;

/*
Aces    Choice
Twos    4 of a kind
Threes  Full House
Fours   Small Straight
Fives   Large Straight
Sixes   Yacht
 */
