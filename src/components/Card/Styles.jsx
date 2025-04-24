import styled from "styled-components";

export const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    text-align: center;
    border-radius: 16px;
    margin-top: 16px;
    width: 240px;
    height: 260px;
    background-color: rgba(0, 0, 0, 0.3);

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
        width: 180px;
        i{
            font: 32px;
        }
        h3{
            font-size: 16px;
        }
    }

    @media (max-width: 600px){
        width: 240px;
    }
`