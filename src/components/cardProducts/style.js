import styled from "styled-components"

export const TitleCart = styled.div`
    display: flex;
    align-items: center;
    background-color: #27AE60;
    padding: 30px;
    margin-top: 2rem;
    color: #FFFFFF;
    font-size: 1.2rem;
    font-weight: 700;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    width: 80%;

    @media screen and (max-width: 400px){
        width: 79%;
    }
`


export const CartItensUl = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    height: 40vh;
    width: 300px;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: #F5F5F5;
    &&::-webkit-scrollbar {
        width: 7px;
    }
    &&::-webkit-scrollbar-thumb {
        background: #93d7af;
        border-radius: 10px;
        border-radius: 8px;
    }
    &&::-webkit-scrollbar-track {
        border-radius: 8px;
        box-shadow: inset 0 0 5px #a39a9a;
    }

    li{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 80px;
    }

    li img{
        width: 80px;
    }

    li div{
        display: flex;
        width: 40%;
        text-align: center;
        flex-direction: column;
        text-align: left;
        justify-content: center;
    }

    li div h3{
        color: #333333;
        font-size: 0.8rem;
        margin-bottom: 15px;
    }

    li div span{
        color: #828282;
        font-size: 0.6rem;
        font-weight: 400;
        margin-bottom: 10px;
    }

    li button{
        background-color: #F5F5F5;
        color: #BDBDBD;
        font-size: 0.6rem;
        border: none;
        text-align: center;
    }

    li button:hover{
        transition: all 0.5s;
        color: black;
    }

    @media screen and (max-width: 400px){
        width: 285px;
    }

`


export const NoItensCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 20vh;
    align-items: center;
    justify-content: center;
    background-color: #F5F5F5;
    
    p{
        color: #333333;
        font-size: 1.2rem;
        font-weight: bold;
    }
    span{
        color: #828282;
    }
    @media screen and (max-width: 768px){
        height: 30vh;
    }

`