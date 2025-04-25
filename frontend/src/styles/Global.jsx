import { createGlobalStyle } from "styled-components";

const GlobalStylle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 1200px;
        background-color: white;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default GlobalStylle