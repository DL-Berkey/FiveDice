import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { ROUTER_MAP, GAMEMODE, GAMEMODE_DESCRIPTION } from "@/constants";
import { Button } from "@/styles/common";

interface Props {
    SVGIcon: React.ReactNode | null;
    gamemode: GameMode;
}

const GameQuickStartButton = ({ SVGIcon, gamemode }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    const onClick = () => {
        navigate(ROUTER_MAP.GAMEBOARD, { state: { GameMode: gamemode } });
    };

    const onEnterOrLeave = () => {
        setOpen((prev) => !prev);
    };

    return (
        <Wrapper
            onClick={onClick}
            onMouseEnter={onEnterOrLeave}
            onMouseLeave={onEnterOrLeave}
        >
            {SVGIcon}
            <span>{GAMEMODE[gamemode]}</span>
            <ModeInfo open={open}>
                <div>{GAMEMODE[gamemode]}</div>
                <div>{GAMEMODE_DESCRIPTION[gamemode]}</div>
            </ModeInfo>
        </Wrapper>
    );
};

const Wrapper = styled.button`
    ${Button}

    position: relative;

    & + & {
        margin-left: 2%;
    }

    & span {
        color: white;
    }

    & svg {
        fill: var(--sub-accent-color);

        transform: scale(1.2);
    }
`;

const ModeInfo = styled.div<{ open: boolean }>`
    position: absolute;

    top: 50%;
    left: 110%;

    transform: translateY(-50%);

    display: ${(props) => (props.open ? "block" : "none")};

    width: 300%;
    height: fit-content;

    padding: 6% 3%;

    font-size: 1.2rem;
    color: black;

    border-radius: 10px;
    background: white;

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

export default GameQuickStartButton;
