import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Content from "./Content";

const Layout = () => {
    return (
        <>
            <Wrapper>
                <Header />
                <Content>
                    <Outlet />
                </Content>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 1920px;
    height: 929px;
`;

export default Layout;
