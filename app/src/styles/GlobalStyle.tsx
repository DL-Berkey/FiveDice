import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Poppins', sans-serif;

        --navy: #053B50;
        --blue: #176B87;
        --teal: #64CCC5;
        --gray: #EEEEEE;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: #333;
    }

    a {
        text-decoration: none;
    }

    button {
        background: inherit;
        border: none;
        outline: none;

        &:hover {
            cursor: pointer;
        }
    }

`;

export default GlobalStyle;
