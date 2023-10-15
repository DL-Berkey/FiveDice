import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { NO_SIDE_COMPONENT_URL } from "@/constants";
import Menu from "../Menu/Menu";
import UserInfo from "../UserInfo/UserInfo";

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
            {showSideComponent && <UserInfo />}
        </Wrapper>
    );
};

const Wrapper = styled.main`
    display: flex;
    gap: 2%;

    height: 92%;

    padding: 0 2% 4% 2%;
`;

export default Content;
