import styled from "styled-components";

export const StyleInicio = styled.div`
    @keyframes surgirLateral {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes flutuar {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-5px); }
    100% { transform: translateY(0); }
    }

    padding: 0 40px;

    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 80px;
        height: calc(100vh - 123px);
    

        .imagem{
            width: 210px;
            height: 210px;
            opacity: 0;
            transform: translateX(100px); /* fora da tela à esquerda */
            animation: surgirLateral 0.8s ease-out forwards;
            animation-delay: 0.2s; 
        }

        .texto{
            display: flex;
            flex-direction: column;
            width: 400px;
            opacity: 0;
            transform: translateX(-100px); /* fora da tela à esquerda */
            animation: surgirLateral 0.8s ease-out forwards;
            animation-delay: 0.2s; /* tempo após o carregamento */

            h3{
                font-size: 40px;
                span{
                    font-weight: 200;
                }
            }

            p{
                font-family: 32px;
            }

            .social{
                margin-top: 24px;
                display: flex;
                gap: 56px;
                i{
                    font-size: 32px;
                    animation: flutuar 3s ease-in-out infinite;
                }
            }
        }
    }

    .cardContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;

        .cards{
            display: flex;
            justify-content: space-around;
            margin-top:32px ;
        }
    }

    @media (max-width: 768px){
        .container{
            gap: 0;
        }
        
        .imagem{
            width: 140px !important;
            height: 140px !important;

            img{
                
            }
        }

        .texto{
            h3{
                font-size: 24px !important;
            }

            p{
                font-size: 16px !important;
            }
        }

    }

    @media (max-width: 600px){
        .container{
            flex-direction: column-reverse;
            gap: 5vh;
        }

        .texto{
            text-align: center;
        }

        .social{
            justify-content: center;
        }
    }
`