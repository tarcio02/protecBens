import styled from "styled-components";

export const StylePessoa = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    gap: 16px;

    .pre{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img{
            height: 240px;
            width: 240px;
            border-radius: 50%;
            border: 1px solid black;
        }

        p{
            font-size: 24px;
            font-weight: bold;
            margin-top: 16px;
            text-decoration: underline;
        }
    }

    .input{
        display: flex;
        justify-content: center;
        gap: 16px;

        input[type="file"]{
            display: none;
        }

        input, .botao-upload{
            height: 40px;
            width: 160px;
            background-color: transparent;
            border: solid 1px black;
            border-radius: 8px;
            padding: 4px;
        }

        input::placeholder{
            color: black;
        }

        .botao-upload{
            display: flex;
            align-items: center;
        }
        i{
            font-size: 16px;
            margin-right: 4px;
        }
    }
    button{
        background-color: black;
        color: white;
        font-weight: bold;
        letter-spacing: 0.5;
        width: 300px;
        height: 40px;
        border-radius: 8px;
        cursor: pointer;
    }

    @media (max-width: 764px){
        .input{
            flex-direction: column;
            input, .botao-upload{
                width: 180px;
            }
        }
    }
`