import styled from "styled-components";

export const StyleFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
    padding: 16px;
    background: rgba(0, 0, 0, 0.2);

    img{
        width: 80px;
    }

    a{
        margin-left: 4px;
        color: black;
    }

    @media (min-width: 768px){
    flex-direction: column;
    gap: 16px;
}
`