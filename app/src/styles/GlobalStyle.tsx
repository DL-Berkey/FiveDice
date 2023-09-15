import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Poppins', sans-serif;

        --navy: #053B50;
        --blue: #176B87;
        --teal: #64CCC5;
        --gray: #EEEEEE;

        --win: #82A0D8;
        --defeat: #EF9595;
        --draw: gray;

        --shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
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

    ul, ol {
        list-style: none;
    }
`;

export default GlobalStyle;
