import { Link } from "react-router-dom";
import styled from "styled-components";

import { BsDice5 } from "react-icons/bs";

import { ROUTER_MAP } from "@/constants";

const Logo = () => {
    return (
        <Wrapper>
            <BsDice5 />
            <Link to={ROUTER_MAP.NOTICE}>Five Dice</Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;

    font-size: 2rem;

    & svg {
        margin-right: 0.5rem;

        fill: var(--accent-color);
        transform: rotate(10deg);
    }

    & a {
        color: var(--accent-color);
    }
`;

export default Logo;
