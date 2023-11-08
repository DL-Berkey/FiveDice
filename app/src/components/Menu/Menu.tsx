import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
    BsMegaphone,
    BsDice5,
    BsBook,
    BsDice1,
    BsTrophy,
} from "react-icons/bs";
import { ROUTER_MAP } from "@/constants";

const Menu = () => {
    return (
        <Wrapper>
            <MenuContainer>
                <MenuItem to={ROUTER_MAP.NOTICE}>
                    <BsMegaphone />
                    <span>Notice</span>
                </MenuItem>
                <MenuItem to={ROUTER_MAP.RANKING}>
                    <BsTrophy />
                    <span>Ranking</span>
                </MenuItem>
                <MenuItem to={ROUTER_MAP.MULTIPLAYER}>
                    <BsDice5 />
                    <span>Multiplayer</span>
                </MenuItem>
                <MenuItem to={ROUTER_MAP.SINGLEPLAYER}>
                    <BsDice1 />
                    <span> SinglePlayer</span>
                </MenuItem>
                <MenuItem to={ROUTER_MAP.RULE}>
                    <BsBook />
                    <span> Rule</span>
                </MenuItem>
            </MenuContainer>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
    width: 12%;
    height: 40%;

    background: white;

    box-shadow: var(--shadow);
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;

    padding: 8% 4%;

    text-align: center;
    font-size: 1.3rem;
`;

const MenuItem = styled(NavLink)`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 14%;

    padding: 0 8%;

    svg {
        transform: scale(0.8);
    }

    &.active {
        background: var(--blue);
        border-radius: 10px;

        & svg {
            fill: white;
        }

        & span {
            color: white;
        }
    }
`;

export default Menu;
