import styled from "styled-components";

const LevelInfo = () => {
    return (
        <Wrapper>
            <ExperienceBarInfo>
                <span>Lv.1</span>
                <span>User Name</span>
            </ExperienceBarInfo>
            <ExperienceBar value="20" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5%;
`;

const ExperienceBarInfo = styled.div`
    & :first-child {
        font-size: 1.2rem;
        margin-right: 5%;
    }

    & :last-child {
        font-size: 1rem;
    }
`;

const ExperienceBar = styled.div<{ value: string }>`
    position: relative;

    height: 1.2rem;

    border: 2px solid var(--blue);
    border-radius: 10px;

    overflow: hidden;

    &::before {
        content: "";

        position: absolute;
        top: 0;
        left: 0;

        width: ${(props) => props.value + "%"};
        height: 100%;

        background: var(--teal);
    }
`;

export default LevelInfo;
