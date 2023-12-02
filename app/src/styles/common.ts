import { css } from "styled-components";

export const button = css`
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

export const menuItem = css`
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

export const form = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12%;

    width: 100%;
    height: 100%;
`;
export const formRow = css`
    position: relative;

    width: 64%;
    height: 3.4rem;

    & svg {
        position: absolute;
        top: 50%;
        left: 4%;

        transform: translateY(-50%) scale(1.4);

        fill: var(--sub-accent-color);
    }
`;

export const input = css`
    width: 100%;
    height: 100%;

    padding-left: 12%;

    font-size: 1.2rem;

    border: 2px solid var(--sub-accent-color);
`;
