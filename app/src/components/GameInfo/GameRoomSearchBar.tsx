import styled from "styled-components";
import { BsXLg, BsSearch } from "react-icons/bs";

const GameRoomSearchBar = () => {
    return (
        <Wrapper>
            <input placeholder="Searching game room" />
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

    width: 50%;
    height: 65%;

    border-bottom: 3px solid var(--blue);
    border-radius: 10px;

    overflow: hidden;

    & input {
        width: 92%;
        height: 100%;

        padding-left: 2%;
        padding-right: 8%;

        font-size: 1rem;
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
