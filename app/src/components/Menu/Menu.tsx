import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
    BsPersonFill,
    BsPerson,
    BsMegaphone,
    BsDice5,
    BsBook,
    BsTrophy,
} from "react-icons/bs";
import { SlLogout } from "react-icons/sl";

import useLogout from "@/hooks/useLogout";
import { userDataAtom } from "@/recoil/atom";
import { ROUTER_MAP } from "@/constants";
import { MenuItem } from "@/styles/common";

const Menu = () => {
    const { isLogin, logout } = useLogout();

    const userData = useRecoilValue(userDataAtom);

    const onClick = async () => {
        await logout();
    };

    return (
        <Wrapper>
            {isLogin ? (
                <Account to="#">
                    <BsPersonFill />
                    <span>{userData?.nickname}</span>
                </Account>
            ) : (
                <Item to={ROUTER_MAP.LOGIN}>
                    <BsPerson />
                    <span>로그인</span>
                </Item>
            )}
            <Item to={ROUTER_MAP.NOTICE}>
                <BsMegaphone />
                <span>공지</span>
            </Item>
            <Item to={ROUTER_MAP.RANKING}>
                <BsTrophy />
                <span>랭킹</span>
            </Item>
            <Item to={ROUTER_MAP.MULTIPLAYER}>
                <BsDice5 />
                <span>게임 플레이</span>
            </Item>
            <Item to={ROUTER_MAP.RULE}>
                <BsBook />
                <span>하는 법</span>
            </Item>
            {isLogin && (
                <LogoutButton onClick={onClick}>
                    <SlLogout />
                    <span>로그아웃</span>
                </LogoutButton>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    grid-area: menu;

    display: flex;
    flex-direction: column;
    gap: 2%;

    height: 100%;

    padding: 8% 6%;
    padding: 8% 0;

    text-align: center;
    font-size: 1.3rem;

    background: white;
`;

const Item = styled(NavLink)`
    ${MenuItem}

    & span {
        position: relative;

        // 밑줄
        &::after {
            content: "";

            position: absolute;

            left: 0;
            bottom: 0;

            width: 0;
            height: 1px;

            background: var(--sub-accent-color);

            transition: width 0.4s;
        }
    }

    &.active {
        & svg {
            fill: var(--sub-accent-color);
        }

        & span {
            color: var(--sub-accent-color);

            &::after {
                width: 100%;
            }
        }
    }
`;

//
const Account = styled(NavLink)`
    ${MenuItem}

    & svg {
        fill: var(--accent-color);

        transform: scale(1.1);
    }

    & span {
        font-weight: bold;
        color: var(--accent-color);
    }
`;

const LogoutButton = styled.button`
    ${MenuItem}

    margin-top: auto;

    & svg {
        fill: var(--red);
    }

    & span {
        color: var(--red);
    }
`;

export default Menu;
