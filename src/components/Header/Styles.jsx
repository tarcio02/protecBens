import styled from "styled-components";

export const StyleHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    padding: 16px;
    position: relative;
    background: rgba(0, 0, 0, 0.3);

    .container{
        overflow-x: auto;
        width: 100%;
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

