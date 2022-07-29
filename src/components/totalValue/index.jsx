import { TotalValueStyled } from "./style"
import { toast } from "react-toastify"

function TotalValue({price, setCardItens, setPrice}){
    return(
        <TotalValueStyled>
            <div>
                <p>Preço Total </p>
                <span>{price.toFixed(2)}</span>
            </div>
            <button onClick={() => {setCardItens([])
           setPrice(0)
           toast.success("Todos os itens removidos")}}>Remover todos</button>
        </TotalValueStyled>
    )
}

export default TotalValue