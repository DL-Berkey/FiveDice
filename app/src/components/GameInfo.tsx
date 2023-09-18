import styled from "styled-components";

const GameInfo = () => {
    return (
        <Wrapper>
            <div className="서버에서 온 게임 리스트">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="게임 모드">
                <ul>
                    <li>무제한</li>
                    <li>일반</li>
                    <li>랭크</li>
                </ul>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 74%;
    height: 95%;

    background: white;

    border-radius: 15px;
    box-shadow: var(--shadow);
`;

export default GameInfo;
