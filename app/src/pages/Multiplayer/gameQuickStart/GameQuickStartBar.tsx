import styled from "styled-components";

import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { PiRobotFill } from "react-icons/pi";

import SubjectTitle from "@/components/common/SubjectTitle";
import GameCreatingButton from "../gameCreatingButton/GameCreatingButton";
import GameQuickStartButton from "./GameQuickStartButton";

const GameQuickStartBar = () => {
    return (
        <Wrapper>
            <SubjectTitle
                SVGIcon={<BsFillRocketTakeoffFill />}
                title="빠른 시작"
            />
            <ButtonContainer>
                <GameQuickStartButton
                    SVGIcon={<PiRobotFill />}
                    gamemode="Solo"
                />
                <GameCreatingButton />
                <GameQuickStartButton
                    SVGIcon={<IoGameController />}
                    gamemode="Normal"
                />
            </ButtonContainer>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    width: 100%;
    height: 12%;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2%;
`;

export default GameQuickStartBar;
