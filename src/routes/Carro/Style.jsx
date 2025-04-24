import styled from "styled-components";

export const StyleCarro = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;

    .pl-ca, .mo-co{
        display: flex;
        gap: 16px;
    }

    input, button{
        height: 40px;
        background: transparent;
        padding: 4px;
        border-radius: 16px;
        border: 1px solid black;
        width: 140px;
    }

    input::placeholder{
        color: black;
    }

    button{
        background-color: black;
        color: white;
        font-weight: bold;
        letter-spacing: 0.5;
        width: 300px;
        cursor: pointer;
    }
`