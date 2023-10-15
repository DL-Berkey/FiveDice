import styled from "styled-components";
import GameModeSeleteButton from "./GameQuickStartButton";

const GameModeSelectBar = () => {
    return (
        <Wrapper>
            <Title>Quick Match</Title>
            <GameModeSeleteButton
                gamemode="Rankup"
                description="Win the game and get the rank up!"
            />
            <GameModeSeleteButton
                gamemode="Normal"
                description="Enjoy normal game!"
            />
            <GameModeSeleteButton
                gamemode="Extreme"
                description="Enjoy extreme game with no score limits!"
            />
        </Wrapper>
    );
};
const Wrapper = styled.div`
    width: 45%;
    height: 8%;

    border-radius: 10px;
`;

const Title = styled.div`
    position: relative;

    margin-bottom: 1%;

    font-size: 1rem;
    text-align: center;
    color: var(--blue);
    font-weight: 700;

    &::before {
        content: "";

        position: absolute;
        top: 50%;
        left: 6%;

        transform: translateY(-50%);

        width: 32%;
        height: 2px;

        background: var(--blue);
    }

    &::after {
        content: "";

        position: absolute;
        top: 50%;
        right: 6%;

        transform: translateY(-50%);

        width: 32%;
        height: 2px;
        background: var(--blue);
    }
`;

export default GameModeSelectBar;
