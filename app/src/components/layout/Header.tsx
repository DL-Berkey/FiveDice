import styled from "styled-components";
import { Link } from "react-router-dom";

import { AiOutlineUser } from "react-icons/ai";

import { ROUTER_MAP } from "@/constants";

const Header = () => {
    return (
        <Wrapper>
            <Logo>
                <Link to={ROUTER_MAP.NOTICE}>Five Dice</Link>
            </Logo>
            <Account>
                <button>
                    <AiOutlineUser />
                </button>
            </Account>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 6%;
    font-size: 2rem;

    padding: 0 2%;
    margin-bottom: 2%;
    font-weight: 700;

    background: white;
    box-shadow: var(--shadow);
`;

const Logo = styled.div`
    flex: 1;
`;

const Account = styled.div`
    flex: 1;

    & > button {
        float: right;

        font-size: inherit;
    }
`;

export default Header;
