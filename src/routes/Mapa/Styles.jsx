import styled from "styled-components";

export const StyleMapa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 48px;

    .titulo{
        text-align: center;

        i{
            font-size: 60px;
        }
    }

    img{
        width: 640px;
        border-radius: 16px;
    }


    @media (min-width: 768px){
        flex-direction: column;
        gap: 16px;
}
`