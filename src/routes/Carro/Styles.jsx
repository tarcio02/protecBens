import styled from "styled-components";

export const StyleCarro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 16px;

    input, button{
        height: 40px;
        width: 300px;
        background-color: transparent;
        border-radius: 16px;
        border: solid 1px black;
        padding: 4px;
    }

    input::placeholder{
        color: black;
    }

    button{
        background-color: black;
        color: white;
    }
`