import { css } from "styled-components";

export const Button = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16%;

    width: 12%;
    height: fit-content;

    padding: 0 1%;

    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.5;

    background: var(--accent-color);
    border-radius: 14px;
`;

export const MenuItem = css`
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
