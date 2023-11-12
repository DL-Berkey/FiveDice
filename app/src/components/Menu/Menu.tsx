import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
    BsPerson,
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
                    <span>멀티 플레이</span>
                </MenuItem>
                <MenuItem to={ROUTER_MAP.SINGLEPLAYER}>
                    <BsDice1 />
                    <span>싱글 플레이</span>
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
    width: 12%;
    height: 40%;

    background: white;

    border-radius: 10px;
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

    & svg {
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
