import { Link } from "react-router-dom";
import styled from "styled-components";

import { BsDice5 } from "react-icons/bs";

import { ROUTER_MAP } from "@/constants";

const Header = () => {
    return (
        <Wrapper>
            <Logo>
                <BsDice5 />
                <Link to={ROUTER_MAP.NOTICE}>Five Dice</Link>
            </Logo>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 9%;

    padding: 0 4%;
    margin-bottom: 2%;

    font-size: 3.5rem;
    font-weight: 700;
`;

const Logo = styled.div`
    flex: 1;

    display: flex;
    align-items: center;

    & svg {
        margin-right: 0.5%;

        fill: white;
        transform: rotate(10deg);
    }

    & a {
        color: white;
    }
`;

export default Header;
