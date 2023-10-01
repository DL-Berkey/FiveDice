import styled from "styled-components";
import {
    BsMegaphone,
    BsDice5,
    BsBook,
    BsDice1,
    BsTrophy,
} from "react-icons/bs";

const Menu = () => {
    return (
        <Wrapper>
            <MenuContainer>
                <MenuItem>
                    <BsMegaphone />
                    <span>Notice</span>
                </MenuItem>
                <MenuItem>
                    <BsTrophy />
                    <span>Ranking</span>
                </MenuItem>
                <MenuItem active="true">
                    <BsDice5 />
                    <span>Game Start</span>
                </MenuItem>
                <MenuItem>
                    <BsDice1 />
                    <span> Practice</span>
                </MenuItem>
                <MenuItem>
                    <BsBook />
                    <span> Rule</span>
                </MenuItem>
            </MenuContainer>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
    flex: 1.7;

    height: 40%;

    box-shadow: var(--shadow);
`;

const MenuContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;

    padding: 8% 4%;

    text-align: center;
    font-size: 1.6rem;
`;

const MenuItem = styled.li<{ active?: "true" }>`
    display: flex;
    justify-content: left;
    align-items: center;

    padding-left: 8%;

    &[active="true"] {
        background: var(--blue);
        border-radius: 10px;

        & svg {
            fill: white;
        }

        & span {
            color: white;
        }
    }

    & span {
        margin-left: 10%;
    }
`;

export default Menu;
