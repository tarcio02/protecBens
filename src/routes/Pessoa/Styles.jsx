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
        flex-direction: column;
        justify-content: center;
        gap: 16px;

        input[type="file"]{
            display: none;
        }

        input, .botao-upload{
            height: 40px;
            background-color: transparent;
            border: solid 1px black;
            border-radius: 8px;
            padding: 4px;
        }

        .botao-upload{
            display: flex;
            align-items: center;
        }
    }
`