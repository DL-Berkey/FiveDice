import styled from "styled-components";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Wrapper>
                <Header />
                <Content />
                <Footer />
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    width: 1920px;
    height: 929px;

    padding: 0 6%;
`;

export default Layout;
