import styled from "styled-components";
import GameModeSeleteButton from "./GameModeSeleteButton";

const GameModeSelectBar = () => {
    return (
        <Wrapper>
            <Title>Quick Match</Title>
            <GameModeSeleteButton
                name="Rankup"
                description="Win the game and get the rank up!"
            />
            <GameModeSeleteButton
                name="Normal"
                description="Enjoy normal game!"
            />
            <GameModeSeleteButton
                name="Extreme"
                description="Enjoy extreme game with no score limits!"
            />
        </Wrapper>
    );
};
const Wrapper = styled.div`
    width: 40%;
    height: 8%;

    border-radius: 10px;
`;

const Title = styled.div`
    position: relative;

    height: 50%;

    margin-bottom: 1%;

    //
    /* font-size: 1.4rem; */
    font-size: 100%;
    //
    text-align: center;
    color: var(--blue);
    font-weight: 700;

    &::before {
        content: "";

        position: absolute;
        top: 50%;
        left: 5%;

        transform: translateY(-50%);

        width: 28%;
        height: 2px;

        background: var(--blue);
    }

    &::after {
        content: "";

        position: absolute;
        top: 50%;
        right: 5%;

        transform: translateY(-50%);

        width: 28%;
        height: 2px;

        background: var(--blue);
    }
`;

export default GameModeSelectBar;
