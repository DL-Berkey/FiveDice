import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Menu from "../Menu/Menu";

const Layout = () => {
    return (
        <>
            <Wrapper>
                <Header />
                <Menu />
                <Content>
                    <Outlet />
                </Content>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        "header header"
        "menu content";

    grid-template-rows: 1fr 12fr;
    grid-template-columns: 2fr 12fr;

    width: 1920px;
    height: 929px;

    overflow: hidden;
`;

const Content = styled.main`
    grid-area: content;

    width: 100%;
    height: 100%;

    background: #eeeeee;

    overflow: hidden;
`;

export default Layout;
