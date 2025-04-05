import styled from "styled-components";

export const StyleCadastro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    margin: 40px 0;
    padding: 40px;
    gap: 32px;

    .inputs{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        
        input, select, button{
            height: 40px;
            background: transparent;
            padding: 4px;
            border-radius: 8px;
            border: 1px solid black;
        }
        input::placeholder{
            color: black;
        }

        .strings{
            display: flex;
            flex-direction: column;
            gap: 16px;
            input{
                width: 300px;
            }
        }

        .data{
            width: 300px;

            .container{
                display: flex;
                justify-content: space-between;
            }

            .dia, select{
                width: 100px;
            }
        }

        button{
            width: 300px;
            background-color: black;
            color: white;
            font-weight: bold;
            letter-spacing: 0.5px;
        }
        .span{
            text-decoration: underline;
            font-weight: bold;
            color: black;
        }
    }

    @media (max-width: 786px){
        .strings input{
            width: 300px;
        }
    }
`