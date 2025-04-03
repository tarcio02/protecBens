import styled from "styled-components";

export const StyleMenuNav = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    gap: 16px;

    li{
        padding: 6px;
        border-radius: 16px;
        font-weight: 400;
        font-size: 16px;
    }
    .isActive{
        background-color: black;
        color: #ffff;
    }

    //Regras de layout para desktop
    @media (min-width: 768px){
        display: flex;
        flex-direction: row;
    }
`

