import styled from "styled-components";

export const StyleRastreio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 40px auto;
    width: 80%;
    padding: 40px;
    border-radius: 16px;
    gap: 32px;

    .painel {
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-height: 300px;
        overflow-y: auto;
        width: 100%;
        max-width: 540px;
    }

    .objeto {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 8px;
        border-radius: 12px;
        height: 80px; /* altura fixa desejada */
        box-shadow: 0 0 10px rgba(255, 255, 255, .5); /* efeito leve de neon verde */
        color: black;
    }

    .info {
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        width:120px;
        border-radius: 8px;
        padding: 4px;
        background-color: rgba(0, 0, 0, 0.3);
        border: solid white 1px;
        color: white;
        overflow-wrap: break-word; /* forma mais moderna */
    }

    .button {
        display: flex;
        justify-content: center;
        font-weight: bold;
        letter-spacing: 0.5px;
        color: white;
        background-color: black;
        border-radius: 8px;
        text-align: center;
        align-items: center;
        text-decoration: none;
        padding: 8px;
        gap: 10px;
        cursor: pointer;
    }

    @media (max-width: 600px){
        .info{
            width: 80px;
        }
    }
`
