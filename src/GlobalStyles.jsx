import { createGlobalStyle } from "styled-components";
import mapa from "./imagens/mapa.png"

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial', sans-serif;
    }

    body{
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${mapa});
        background-position: right;
        background-attachment: fixed;
        position: relative;
    }

    body::after {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom right,#ffff,  rgba(224, 181, 20, 0.7) );
        z-index: -1; 
    }
`