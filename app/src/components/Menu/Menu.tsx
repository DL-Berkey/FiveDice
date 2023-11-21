import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
    BsPerson,
    BsMegaphone,
    BsDice5,
    BsBook,
    BsTrophy,
} from "react-icons/bs";

import { ROUTER_MAP } from "@/constants";

const Menu = () => {
    return (
        <Wrapper>
            <MenuContainer>
                <MenuItem to={ROUTER_MAP.LOGIN}>
                    <BsPerson />
                    <span>로그인</span>
                </MenuItem>
                <MenuItem to={ROUTER_MAP.NOTICE}>
                    <BsMegaphone />
                    <span>공지</span>
                </MenuItem>
                <MenuItem to={ROUTER_MAP.RANKING}>
                    <BsTrophy />
                    <span>랭킹</span>
                </MenuItem>
                <MenuItem to={ROUTER_MAP.MULTIPLAYER}>
                    <BsDice5 />
                    <span>게임 플레이</span>
                </MenuItem>
                <MenuItem to={ROUTER_MAP.RULE}>
                    <BsBook />
                    <span>하는 법</span>
                </MenuItem>
            </MenuContainer>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
    grid-area: menu;

    background: white;
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2%;

    height: 100%;

    padding: 8% 6%;
    padding: 8% 0;

    text-align: center;
    font-size: 1.3rem;
`;

const MenuItem = styled(NavLink)`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 26%;

    padding: 0 8%;

    font-size: 1.5rem;

    & svg {
        transform: scale(0.8);
    }

    &.active {
        & svg {
            fill: var(--sub-accent-color);
        }

        & span {
            color: var(--sub-accent-color);
        }
    }
`;

export default Menu;
