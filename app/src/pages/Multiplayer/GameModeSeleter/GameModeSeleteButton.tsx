import { useState } from "react";

import styled from "styled-components";
import { BsInfoCircle } from "react-icons/bs";
import { gamemode } from "@/types";

interface Props {
    gamemode: gamemode;
    description: string;
}

const GameModeSeleteButton = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    const onEnterOrLeave = () => {
        setOpen((prev) => !prev);
    };

    return (
        <Wrapper>
            <span>{props.gamemode}</span>
            <BsInfoCircle
                onMouseEnter={onEnterOrLeave}
                onMouseLeave={onEnterOrLeave}
            />
            <ModeInfo open={open}>
                <div>{props.gamemode}</div>
                <div>{props.description}</div>
            </ModeInfo>
        </Wrapper>
    );
};

const Wrapper = styled.button`
    position: relative;

    display: inline-flex;
    justify-content: center;
    gap: 4%;

    width: calc(100% / 3);
    height: 49%;

    font-size: 1.4rem;
    font-weight: 600;

    & span {
        color: var(--blue);
    }

    & svg {
        fill: var(--red);

        transform: scale(0.8);
    }
`;

const ModeInfo = styled.div<{ open: boolean }>`
    position: absolute;

    top: 50%;
    left: 100%;

    transform: translateY(-50%);

    display: ${(props) => (props.open ? "block" : "none")};

    width: 300%;
    height: fit-content;

    padding: 6% 3%;

    font-size: 1.2rem;
    color: white;

    border-radius: 10px;
    background: var(--blue);
    box-shadow: var(--shadow);

    box-shadow: var(--shadow);
    opacity: 0.9;
    z-index: 1;

    & :first-child {
        font-size: 1.4rem;
        color: inherit;
        text-decoration: underline;

        margin-bottom: 2%;
    }

    & :last-child {
        color: inherit;
    }
`;

export default GameModeSeleteButton;
