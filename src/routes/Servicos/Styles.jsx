import styled from "styled-components";

export const StyleServicos = styled.div`
    @keyframes surgirLateral {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    display: flex;

    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        background-color: rgba(0, 0, 0, 0.2);
        padding: 32px;
        width: 40vw;
        margin: 32px auto;
        border-radius: 16px;
    }

    .text{
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 16px;
        max-width: 764px;

        img{
            width: 120px;
        }

        .texto{
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    }

    .left{
        opacity: 0;
        transform: translateX(-100px); /* fora da tela à esquerda */
        animation: surgirLateral 0.8s ease-out forwards;
        animation-delay: 0.2s; 
    }

    .rigth{
        opacity: 0;
        transform: translateX(100px); /* fora da tela à esquerda */
        animation: surgirLateral 0.8s ease-out forwards;
        animation-delay: 0.2s; 
    }

    .carro{
        flex-direction: column-reverse;
    }

    @media (max-width: 740px){
        flex-direction: column;

        .container{
            width: 80vw;
        }
    }
`