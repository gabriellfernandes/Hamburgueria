import styled from "styled-components"

export const UlStyle = styled.ul`
    display: flex;
    width: 65%;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    list-style: none;
    margin-top: 2rem;
    margin-bottom: 8rem;
    margin-right: 5%;

    li{
        margin-right: 2%;
        display: flex;
        flex-direction: column;
        align-items: left;
        border: 1px solid #E0E0E0;
        margin-bottom: 10px;
        padding: 15px;
        padding-top: 0;
        border-radius: 16px;
        
    }

    li img{
        width: 180px;
        margin-bottom: 10px;
        
    }

    li h2{
        color: #333333; 
        font-size: 1.1rem;
        margin-bottom: 10px;
        font-weight: 700;
    }

    li p{
        font-weight: 400;
        font-size: 0.9rem;
        color: #828282;
        margin-bottom: 10px;
    }

    li span{
        color: #27AE60;
        font-size: 0.9rem;
        font-weight: bolder;
        margin-bottom: 10px;
    }

    li button{
        background-color: #27AE60;
        color: #fff;
        border-radius: 8px;
        margin-left: 4px;
        padding: 6px 10px;
        border: none;
    }

    @media (max-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        overflow-x: scroll;
        gap: 20px;
        height: 360px;
        padding: 0 20px;
        margin-bottom: 2%;
        
        li{
            margin-right: 5%;
        }

        li img{
            width: 180px
        }

    }
`

export const NoItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;

    p{
        color: #333333; 
        font-size: 1.1rem;
        margin-bottom: 10px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    button{
        background-color: #27AE60;
        color: #fff;
        border-radius: 8px;
        margin-left: 4px;
        padding: 6px 10px;
        border: none;
    }
`