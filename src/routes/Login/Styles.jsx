import styled from "styled-components";

export const StyleLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    gap: 16px;
    border-radius: 16px;
    padding: 40px 0;
    margin: 40px 0;

    input, button{
        height: 40px;
        background: transparent;
        padding: 4px;
        border-radius: 8px;
        border: 1px solid black;
        width: 300px;
    }

    input::placeholder{
        color: black;
    }

    button{
        background-color: black;
        color: white;
        font-weight: bold;
        letter-spacing: 0.5;
    }

    .span{
        font-weight: bold;
        text-decoration: underline;
        color: black;
    }

`