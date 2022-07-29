import styled from "styled-components"

export const TotalValueStyled = styled.div`
    width: 300px;
    background-color: #F5F5F5;
    border-top: 1px solid #E0E0E0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
    div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
    }

    div p{
        color: #333333;
        font-size: 0.9rem;
        margin-bottom: 5px;
        font-weight: bolder;
    }

    div span{
        color: #828282;
        font-size: 0.8rem;
        font-weight: 400;
        margin-bottom: 5px;
    }

    button{
        background-color: #E0E0E0;
        color: #828282;
        border-radius: 8px;
        margin-left: 4px;
        padding: 10px 80px;
        border: none;
        font-size: 1rem;
    }

    button:hover{
        transition: all 0.5s;
        color: #E0E0E0;
        background-color: #828282;
    }

    @media screen and (max-width: 400px){
        width: 285px;
    }

`