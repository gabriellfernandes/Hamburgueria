import { TotalValueStyled } from "./style"

function TotalValue({price, setCardItens, setPrice}){
    return(
        <TotalValueStyled>
            <div>
                <p>Preço Total </p>
                <span>{price.toFixed(2)}</span>
            </div>
            <button onClick={() => {setCardItens([])
           setPrice(0)}}>Remover todos</button>
        </TotalValueStyled>
    )
}

export default TotalValue