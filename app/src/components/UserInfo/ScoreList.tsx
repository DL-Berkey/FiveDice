import styled from "styled-components";

const ScoreList = () => {
    return (
        <Wrapper>
            <ScoreItem GameResult="win">
                <span>2</span>
                <span>Win</span>
            </ScoreItem>
            <ScoreItem GameResult="defeat">
                <span>3</span>
                <span>Defeat</span>
            </ScoreItem>
            <ScoreItem GameResult="draw">
                <span>5</span>
                <span>Draw</span>
            </ScoreItem>
        </Wrapper>
    );
};

const Wrapper = styled.ul`
    display: flex;
    align-items: center;

    width: 100%;
`;

const ScoreItem = styled.li<{ GameResult: GameResult }>`
    flex: 1;

    font-size: 1rem;
    text-align: center;
    color: var(--navy);

    & :first-child {
        margin-right: 10%;
    }

    & :last-child {
        color: ${(props) => {
            switch (props.GameResult) {
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
