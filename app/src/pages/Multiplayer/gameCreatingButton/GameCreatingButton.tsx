import styled from "styled-components";

import { BsPlusLg } from "react-icons/bs";

import { button } from "@/styles/common";

const GameCreatingButton = () => {
    return (
        <Wrapper>
            <BsPlusLg />
            <span>추가</span>
        </Wrapper>
    );
};

const Wrapper = styled.button`
    ${button}

    & svg {
        fill: var(--sub-accent-color);

        transform: scale(1.2);
    }

    & span {
        color: white;
    }
`;

export default GameCreatingButton;
