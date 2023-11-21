import styled from "styled-components";

interface Props {
    title: string;
    SVGIcon: React.ReactNode | null;
}

const SubjectTitle = ({ SVGIcon, title }: Props) => {
    return (
        <Wrapper>
            {SVGIcon}
            <span>{title}</span>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6%;

    width: 15%;

    margin: 1% auto;

    border-bottom: 2px solid var(--sub-accent-color);

    & span {
        font-size: 1.8rem;
        font-weight: 400;
        color: var(--sub-accent-color);
    }

    & svg {
        fill: var(--sub-accent-color);
        transform: scale(1.6);
    }
`;

export default SubjectTitle;
