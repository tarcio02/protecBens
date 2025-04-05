import styled from "styled-components";

export const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 16px;
    text-align: center;
    border: 1px solid black;
    border-radius: 16px;
    margin-top: 16px;
    width: 240px;
    height: 246px;

    i{
        font-size: 40px;
    }

    h3{
        font-size: 24px;
    }

    .button{
        text-decoration: none;
        background-color: black;
        color: white;
        width: 160px;
        padding: 8px;
        font-size: 16px;
        border-radius: 8px;
        border: none;
    }

    @media (max-width: 768px){
        i{
            font: 32px;
        }
        h3{
            font-size: 16px;
        }
    }
`