import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial', sans-serif;
    }

    body{
        padding: 32px 10%;
        background: linear-gradient(to bottom right,#ffff, rgba(224, 181, 20, 0.9));
        position: relative;
    }

    body::after {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2); /* Ajuste a opacidade aqui */
        z-index: -1; /* Mantém atrás do conteúdo */
}
`