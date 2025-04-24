import styled from "styled-components";

export const StyleInformacao = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    width: 80%;
    margin: 40px auto;
    padding: 32px;
    border-radius: 16px;

    .container{
        display: flex;
    }

    .container > :first-child{
        border-right: 0.5px solid white;
    }
    .container > :last-child{
        border-left: 0.5px solid white;
    }

    .dados{
        text-align: center;
        width: 50%;
        margin-top: 32px;
    }

    h3{
        border: 1px solid white;
        border-radius: 8px;
        padding: 8px;
        color: white;
        background-color: rgba(0, 0, 0, 0.3);
        max-width: 240px;
        margin: 0 auto 32px;
    }

    .dadosVeiculo{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
    }
    img{
        width: 160px;
        border-radius: 16px;
    }
    
    ul{
        text-align: start;
        li{
            margin-bottom: 8px;
            font-weight: bold;
        }
    }

    .dadosLocal{
        display: flex;
        justify-content: center;
        align-items: start;
        gap: 32px;

        .imagens{
            display: flex;
            flex-direction: column;
            gap: 16px;
            img{
                width: 160px;
            }
        }

        span{
            font-weight: bold;
            
            i{
                margin-right: 8px;
            }
        }
    }

    .localizacao{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 16px;
        text-align: start;
    }

    @media (max-width: 764px){
        .container{
            display: flex;
            flex-direction: column;
        }

        .container > :last-child, .container > :first-child{
            border: none;
        }

        .dados{
            width: 100%;
        }

        .dadosVeiculo{
            border-bottom: 1px solid white;
            padding-bottom: 32px;
        }

        .dadosLocal{
            gap: 16px;
        }

        .imagens{
            display: flex;
            flex-direction: row;
        }
    }

    @media (max-width: 600px){
        
    }
`