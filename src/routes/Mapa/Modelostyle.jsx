import styled from "styled-components";

export const StyleMapa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 48px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    padding: 40px 16px;
    margin: 40px auto;
    width: 80%;
    gap: 16px;

    img{
        width: 640px;
        border-radius: 16px;
        margin-bottom: 24px;
    }

    .cards{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
    
    }


    @media (max-width: 768px){
        img{
            width: 300px;
        }

        .cards{
            flex-direction: column;
        }
}
`