import styled from "styled-components";

export const StyleTitulo = styled.div`
    text-align: center;
    h2{
        font-size: 24px;
    }

    p{
        font-size: 16px;
    }

    img{
        width: 98px;
    }

    @media (max-width: 768px){
        img{
            width: 80px;
        }
        h2{
            font-size: 16px;
        }
    }
`