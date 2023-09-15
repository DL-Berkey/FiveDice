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
    display: flex;
    flex-direction: column;

    padding: 0 6%;

    height: 100vh;
`;

export default Layout;
