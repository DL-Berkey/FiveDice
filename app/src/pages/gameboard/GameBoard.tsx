import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { gamemode } from "@/types";

const GameBoard = () => {
    const location = useLocation();
    const state = location.state as { gamemode: gamemode };

    return <Wrapper>{state.gamemode}</Wrapper>;
};

const Wrapper = styled.div`
    flex: 7;

    /* width: 30%; */
    height: 90%;
`;

export default GameBoard;
