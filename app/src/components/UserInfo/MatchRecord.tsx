import styled from "styled-components";

const MatchRecord = () => {
    return (
        <Wrapper>
            <RecordTitle>Match Record</RecordTitle>
            <RecordContainer>
                <RecordItem value="defeat">
                    <Mode>Normal</Mode>
                    <UserName>엄청긴닉네임</UserName>
                    <UserPoint>271 Pt</UserPoint>
                    <VSMark>vs</VSMark>
                    <EnemyName>상대방</EnemyName>
                    <EnemyPoint>183 Pt</EnemyPoint>
                </RecordItem>
                <RecordItem value="win">
                    <Mode>Rank</Mode>
                    <UserName>닉네임</UserName>
                    <UserPoint>271 Pt</UserPoint>
                    <VSMark>vs</VSMark>
                    <EnemyName>상대방</EnemyName>
                    <EnemyPoint>183 Pt</EnemyPoint>
                </RecordItem>
                <RecordItem value="draw">
                    <Mode>Unlimited</Mode>
                    <UserName>닉네임</UserName>
                    <UserPoint>271 Pt</UserPoint>
                    <VSMark>vs</VSMark>
                    <EnemyName>상대방</EnemyName>
                    <EnemyPoint>183 Pt</EnemyPoint>
                </RecordItem>
                <RecordItem value="draw">
                    <Mode>Unlimited</Mode>
                    <UserName>닉네임</UserName>
                    <UserPoint>271 Pt</UserPoint>
                    <VSMark>vs</VSMark>
                    <EnemyName>상대방</EnemyName>
                    <EnemyPoint>183 Pt</EnemyPoint>
                </RecordItem>
                <RecordItem value="draw">
                    <Mode>Unlimited</Mode>
                    <UserName>닉네임</UserName>
                    <UserPoint>271 Pt</UserPoint>
                    <VSMark>vs</VSMark>
                    <EnemyName>상대방</EnemyName>
                    <EnemyPoint>183 Pt</EnemyPoint>
                </RecordItem>
                <RecordItem value="draw">
                    <Mode>Unlimited</Mode>
                    <UserName>닉네임</UserName>
                    <UserPoint>271 Pt</UserPoint>
                    <VSMark>vs</VSMark>
                    <EnemyName>상대방</EnemyName>
                    <EnemyPoint>183 Pt</EnemyPoint>
                </RecordItem>
            </RecordContainer>
            <RecordPagination>
                <span>
                    <button>이전</button>
                </span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>
                    <button>다음</button>
                </span>
            </RecordPagination>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */

    /* height: 77%; */
`;

const RecordTitle = styled.div`
    position: relative;

    height: 4%;

    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    line-height: 1;

    margin-bottom: 5%;

    &::after {
        content: "";

        position: absolute;
        left: 50%;
        top: 100%;

        width: 65%;

        border: 1px solid var(--navy);

        transform: translateX(-50%);
    }
`;

const RecordContainer = styled.ul`
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 8%;
`;

const RecordItem = styled.li<{ value: "win" | "defeat" | "draw" }>`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
        ". mode ."
        "user_name vs_mark enemy_name"
        "user_point vs_mark enemy_point";
    align-items: center;

    width: 90%;
    height: 12%;

    padding: 0 2%;

    font-size: 0.8rem;
    text-align: center;
    color: white;

    border-radius: 6px;
    background: ${(props) => {
        switch (props.value) {
            case "win":
                return "var(--win)";
            case "defeat":
                return "var(--defeat)";
            case "draw":
                return "var(--draw)";
        }
    }};
`;

const Mode = styled.div`
    grid-area: mode;

    color: inherit;
`;

const UserName = styled.div`
    grid-area: user_name;

    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: inherit;
`;

const EnemyName = styled.div`
    grid-area: enemy_name;

    font-size: 1rem;
    color: inherit;
`;
const VSMark = styled.div`
    grid-area: vs_mark;

    font-size: 2.5rem;
    font-weight: 700;
    color: inherit;
`;
const UserPoint = styled.div`
    grid-area: user_point;

    color: inherit;
`;
const EnemyPoint = styled.div`
    grid-area: enemy_point;

    color: inherit;
`;

const RecordPagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;

    height: 4%;

    align-items: baseline;

    & :first-child,
    :last-child {
        font-size: 1.2rem;
        font-weight: 700;
    }
`;

export default MatchRecord;
