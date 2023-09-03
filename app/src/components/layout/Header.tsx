import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
    return (
        <Wrapper>
            <Logo>
                <a href="#">Five Dice Game</a>
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

    height: 8vh;
    font-size: 2rem;

    padding: 0 10px;

    line-height: 8vh;
    font-weight: 700;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const Logo = styled.div`
    flex: 1;
`;

const Account = styled.div`
    flex: 1;

    position: relative;

    & > button {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);

        padding-left: 15px;

        font-size: inherit;
    }
`;

export default Header;
