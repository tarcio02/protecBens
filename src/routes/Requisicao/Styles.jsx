import styled from "styled-components";

export const StyleRequisicao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    margin: 40px auto;
    width: 80%;
    padding: 40px 0;

    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;

        .objeto{
            height: 40px;
            width: 300px;
            border-radius: 16px;
            background-color: transparent;
            border: 1px black solid;
            padding: 4px;
        }
    }
`