import styled from "styled-components";

import Menu from "../Menu/Menu";
import UserInfo from "../UserInfo/UserInfo";

interface Props {
    children: React.ReactElement | null;
}

const Content = (props: Props) => {
    return (
        <Wrapper>
            <Menu />
            {props.children}
            <UserInfo />
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
