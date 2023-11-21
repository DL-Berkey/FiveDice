import styled from "styled-components";
import { BsXLg, BsSearch } from "react-icons/bs";

const GameRoomSearchBar = () => {
    return (
        <Wrapper onSubmit={(e) => e.preventDefault()}>
            <input placeholder="검색해보세요!" />
            <FormButton className="delete_button" type="reset">
                <BsXLg />
            </FormButton>
            <FormButton>
                <BsSearch />
            </FormButton>
        </Wrapper>
    );
};

const Wrapper = styled.form`
    position: relative;

    display: flex;

    width: 40%;
    height: 2rem;

    border-radius: 12px;

    overflow: hidden;

    & input {
        width: 92%;
        height: 100%;

        padding-left: 4%;
        padding-right: 8%;

        font-size: 1.2rem;
        font-weight: 500;

        border: none;

        &:focus {
            outline: none;
        }
    }
`;

const FormButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 8%;
    height: 100%;

    font-size: 1.8rem;

    background: var(--blue);

    & svg {
        fill: white;

        transform: scale(0.7);
    }

    &.delete_button {
        position: absolute;
        top: 0;
        right: 8%;

        /* display: none; */

        background: transparent;

        & svg {
            fill: rgb(166, 166, 166);
        }
    }
`;

export default GameRoomSearchBar;
