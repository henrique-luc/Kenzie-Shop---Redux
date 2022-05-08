import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0 ;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: var(--grey-4)
    }

    a {
        text-decoration: none
    }

    button {
        cursor:pointer;
    }

`;
