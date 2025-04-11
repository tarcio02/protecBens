import styled from "styled-components";

export const StyleHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:16px 32px;

    .container{
        overflow-x: auto;
        width: 100%;
    }

.button{
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
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
@media (min-width: 768px){
    /* flex-direction: column;
    gap: 16px; */
}
`

