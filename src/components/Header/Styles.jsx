import styled from "styled-components";

export const StyleHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:16px 32px;

    .container{
        display: flex;
        align-items: center;
        gap: 8px;
    }

.button{
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
    white-space: nowrap;
    padding: 12px;
    font-size: 20px;
    color: white; 
    border-radius: 8px;
    border: solid 1px white;
    text-decoration: none;
}

    img{
        width: 80px;
    }

//Regras de layout para desktop
    @media (max-width: 764px){
        flex-direction: column;
        justify-content: center;
        gap: 8px;
        .container{
            flex-direction: column;
        }

        .button{
            white-space: normal;
            text-align: center;
            font-size: 16px;
            padding:8px;
            i{
                font-size: 20px;
                margin-left: 8px;
            }
        }
    }
`

