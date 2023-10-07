import styled from "styled-components";

const LevelInfo = () => {
    return (
        <Wrapper>
            <ExperienceBarInfo>
                <span>Lv.1</span>
                <span>User Name</span>
            </ExperienceBarInfo>
            <ExperienceBar value="30" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5%;

    height: fit-content;
`;

const ExperienceBarInfo = styled.div`
    font-size: 1.5rem;

    & :first-child {
        font-size: 1.4rem;
        margin-right: 5%;
    }
`;

const ExperienceBar = styled.div<{ value: string }>`
    position: relative;

    height: 1rem;

    border: 2px solid var(--navy);
    border-radius: 8px;

    overflow: hidden;

    &::before {
        content: "";

        position: absolute;
        top: 0;
        left: 0;

        width: ${(props) => props.value + "%"};
        height: 100%;

        background: var(--teal);

        z-index: 1;
    }
`;

export default LevelInfo;
