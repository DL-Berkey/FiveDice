import { css } from "styled-components";

const Button = css`
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

export default Button;
