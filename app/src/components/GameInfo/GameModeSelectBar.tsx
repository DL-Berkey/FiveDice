import styled from "styled-components";

const GameModeSelectBar = () => {
    return (
        <Wrapper>
            <GameModeButton>Rank</GameModeButton>
            <GameModeButton>Normal</GameModeButton>
            <GameModeButton>Unlimited</GameModeButton>
        </Wrapper>
    );
};
const Wrapper = styled.div`
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

export default GameModeSelectBar;
