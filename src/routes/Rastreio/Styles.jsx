import styled from "styled-components";

export const StyleRastreio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 40px 0;
    padding: 40px 16px;
    border-radius: 16px;
    gap: 32px;

    table{
        /* border: 1px solid black; */
        text-align: center;
        text-decoration: underline;
    }

    td, th{
        border: 1px solid black;
        width: 240px;
    }

    button{
        height: 40px;
        width: 320px;
        font-weight: bold;
        letter-spacing: 0.5px;
        color: white;
        background-color: black;
        border-radius: 8px;

        i{
            margin-left: 4px;
        }
    }
`