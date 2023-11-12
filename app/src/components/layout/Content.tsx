import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { NO_SIDE_COMPONENT_URL } from "@/constants";
import Menu from "../Menu/Menu";

interface Props {
    children: React.ReactElement | null;
}

const Content = (props: Props) => {
    const location = useLocation();

    let showSideComponent = true;

    if (NO_SIDE_COMPONENT_URL.includes(location.pathname)) {
        showSideComponent = false;
    }

    return (
        <Wrapper>
            {showSideComponent && <Menu />}
            {props.children}
        </Wrapper>
    );
};

const Wrapper = styled.main`
    flex: 1;

    display: flex;
    gap: 2%;

    height: 0;

    padding: 0 6% 4% 6%;
`;

export default Content;
