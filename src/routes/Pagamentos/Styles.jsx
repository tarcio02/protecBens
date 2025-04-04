import styled from "styled-components";

export const StylePagamentos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0, 0.3);
    padding: 32px 0;
    border-radius: 16px;
    gap: 24px;
    margin: 40px 0;

    .pagamento{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        
        input, select, button{
            height: 40px;
            border-radius: 8px;
            padding: 4px;
            border: 1px solid black;
            color: black;
            background: transparent;
        }
        input::placeholder{
            color: black;
        }
        .nome input{
            width: 320px;
        }
        .cartao{
            width: 222px;
            margin-right: 8px;
        }
        .cvv{
            width: 90PX
        }
        
        .data{
            .mes{
                width: 158px;
                margin-right: 8px;
            }
            .ano{
                width: 158px;
            }
        }

        button{
            width: 100%;
            background-color: black;
            color: white;
            font-weight: bold;
            letter-spacing: .5px;
        }
        .span{
            color: black;
            font-weight: 400;
            i{
                margin-left: 4px;
            }
        }
    }
    `