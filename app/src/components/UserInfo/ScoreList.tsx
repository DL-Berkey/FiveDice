import styled from "styled-components";

const ScoreList = () => {
    return (
        <Wrapper>
            <ScoreItem>2 Win</ScoreItem>
            <ScoreItem>3 Defeat</ScoreItem>
            <ScoreItem>5 Draw</ScoreItem>
        </Wrapper>
    );
};

const Wrapper = styled.ul`
    display: flex;
    align-items: center;

    height: fit-content;
`;

const ScoreItem = styled.li`
    flex: 1;

    font-size: 1rem;
    text-align: center;
    font-weight: 700;
    color: var(--navy);

    & + & {
        border-left: 2px solid var(--navy);
    }
`;

export default ScoreList;
