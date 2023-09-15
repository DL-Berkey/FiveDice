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
    justify-content: center;
    align-items: center;

    width: 100%;
    /* height: fit-content; */
    height: 10%;
`;

const ExperienceBarInfo = styled.div`
    width: 100%;
    height: fit-content;

    font-size: 1.5rem;

    & span {
        display: inline-block;

        height: fit-content;
        min-height: 35px;
    }

    & :first-child {
        font-size: 1.4rem;
        margin-right: 5%;
    }
`;

const ExperienceBar = styled.div<{ value: string }>`
    position: relative;

    width: 95%;
    height: 0.8rem;

    margin-bottom: 3%;

    border: 2px solid var(--navy);
    border-radius: 8px;

    &::before {
        content: "";

        position: absolute;
        top: 0;
        left: 0;

        width: ${(props) => props.value + "%"};
        height: 100%;

        background: var(--teal);

        z-index: -1;
    }
`;

export default LevelInfo;
