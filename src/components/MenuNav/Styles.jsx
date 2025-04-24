import styled from "styled-components";

export const StyleMenuNav = styled.ul`
    display: flex;
    list-style: none;
    gap: 16px;
    margin-left: 32px;

    .desativo{
        padding: 6px;
        border-radius: 16px;
        font-weight: 400;
        font-size: 16px;
        color: black;
        text-decoration: none;
        font-weight: 200;
        display: block;
    }
    .ativo{
        background-color: black;
        color: #ffff;
    }

    //Regras de layout para desktop
    @media (min-width: 764px){
        
    }
`

