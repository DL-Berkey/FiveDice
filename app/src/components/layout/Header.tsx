import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
    return (
        <Wrapper>
            <Logo>
                <a href="#">Five Dice</a>
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
    margin-bottom: 2vh;

    line-height: 8vh;
    font-weight: 700;

    box-shadow: var(--shadow);
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
