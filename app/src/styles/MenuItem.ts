import { css } from "styled-components";

const MenuItem = css`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 26%;

    height: 5%;

    padding: 0 8%;

    font-size: 1.5rem;

    & svg {
        transform: scale(0.8);
    }
`;

export default MenuItem;
