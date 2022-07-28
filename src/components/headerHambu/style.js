import styled from "styled-components"


export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
    width: 99vw;
    height: 60px;

    form{
        display: flex;
        
        div{
                display: flex;
            }

    }


    input{
            background-color: #FFFFFF;
            padding: 10px 0px;
            padding-left: 20px;
            font-size: 1rem;
            color: #000;
            
            border: #E0E0E0 solid 1px;
            border-radius: 8px;
            margin-right: 2%;
        }
    input::placeholder{
        color: #E0E0E0;
    }

    button{
        background-color: #27AE60;
        color: #fff;
        border-radius: 16px;
        margin-left: 6px;
        padding: 6px 10px;
        border: none;
    }

    @media (max-width: 768px) {
        height: 140px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90vw;

       
        img{
            margin-bottom: 20px;
        }

        input{
            background-color: #FFFFFF;
            padding: 5px 0px;
            padding-left: 10px;
            font-size: 1rem;
            color: #000;
            
            border: #E0E0E0 solid 1px;
            border-radius: 8px;
            margin-right: 2%;
        }
    }

    @media (max-width: 400px) {

        width: 87vw;

        form{
            flex-direction: column;
            align-items: center;
        }

        input{
            margin-bottom: 10px;
        }
    }

`