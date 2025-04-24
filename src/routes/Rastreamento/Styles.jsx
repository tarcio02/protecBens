import styled from "styled-components";

export const StyleRastreamento = styled.div`
    @keyframes float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-8px);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes pulseNeon {
    0% {
        box-shadow:
        0 0 5px #008000,
        0 0 10px #008000,
        0 0 10px #008000,
        0 0 30px #008000;
    }
    50% {
        box-shadow:
        0 0 10px #00ff00,
        0 0 20px #00ff00,
        0 0 20px #00ff00,
        0 0 50px #00ff00;
    }
    100% {
        box-shadow:
        0 0 5px #008000,
        0 0 10px #008000,
        0 0 20px #008000,
        0 0 30px #008000;
    }
    }

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 24px;
    padding: 60px 40px;

    .cards{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 32px;

        .card{
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            gap: 24px;
            width: 100%;
            height: 240px;
            border-radius: 16px;
            background: rgba(0, 0, 0, 0.3);
            padding: 8px;

            i{
                font-size: 48px;
                animation: float 2s ease-in-out infinite;
                ;
            }
        }

        .span{
            font-weight: bold;
            background-color: rgba(0, 128, 0, 0.7);
            color: white;
            margin: 0 auto;
            padding: 8px;
            border-radius: 16px;

            /* box-shadow:
                0 0 5px #008000,
                0 0 10px #008000,
                0 0 10px #00ff00,
                0 0 25px #00ff00; */

                animation: pulseNeon 3s infinite;
        }
    }

    @media (max-width: 768px){
        flex-direction: column;
    }
`