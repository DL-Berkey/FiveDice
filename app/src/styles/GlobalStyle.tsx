import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }

    :root {
        font-family: 'Poppins', "Pretendard-Regular",sans-serif;

        --navy: #053B50;
        --teal: #64CCC5;

        --blue: #82A0D8;
        --red: #EF9595;
        --gray: gray;
        --bg_blue: #ADC4CE;

        --shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        color: #333;
    }
    
    html {
        font-size: 16px;
    }

    body {
        background: var(--bg_blue);
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
