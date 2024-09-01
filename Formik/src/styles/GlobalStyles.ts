import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Roboto Mono", sans-serif;
        color: #252525;
        font-weight: 400;
        background-color: #f7f2e9;
        border-bottom: 16px solid #edc84b;
        padding: 3.2rem;
        padding-bottom: 60px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export default GlobalStyles;