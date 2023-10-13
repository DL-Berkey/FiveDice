import styled from "styled-components";

import { gameresult } from "@/types";

const ScoreList = () => {
    return (
        <Wrapper>
            <ScoreItem gameresult="win">
                <span>2</span>
                <span>Win</span>
            </ScoreItem>
            <ScoreItem gameresult="defeat">
                <span>3</span>
                <span>Defeat</span>
            </ScoreItem>
            <ScoreItem gameresult="draw">
                <span>5</span>
                <span>Draw</span>
            </ScoreItem>
        </Wrapper>
    );
};

const Wrapper = styled.ul`
    display: flex;
    align-items: center;
`;

const ScoreItem = styled.li<{ gameresult: gameresult }>`
    flex: 1;

    font-size: 1rem;
    text-align: center;
    color: var(--navy);

    & :first-child {
        margin-right: 10%;
    }

    & :last-child {
        color: ${(props) => {
            switch (props.gameresult) {
                case "win":
                    return "var(--blue)";
                case "defeat":
                    return "var(--red)";
                case "draw":
                    return "var(--gray)";
            }
        }};
    }

    & + & {
        border-left: 2px solid var(--navy);
    }
`;

export default ScoreList;
