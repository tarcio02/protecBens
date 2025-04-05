import styled from "styled-components";

export const StyleMenuNav = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    gap: 16px;
    justify-content: center;

    .desativo{
        padding: 6px;
        border-radius: 16px;
        font-weight: 400;
        font-size: 16px;
        color: black;
        text-decoration: none;
        font-weight: 200;
    }
    .ativo{
        background-color: black;
        color: #ffff;
    }

    //Regras de layout para desktop
    @media (min-width: 768px){
        display: flex;
        flex-direction: row;
    }
`

