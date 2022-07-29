import TotalValue from "../totalValue"
import { CartItensUl, NoItensCard, TitleCart } from "./style"
import { toast } from "react-toastify"
function CardItens({cardItens, setCardItens , price, removePrice, setPrice}){
    function removeItens(item){
        setCardItens((oldItens) => oldItens.filter((elem) => elem.id !== item.id))
    }
    
    return(
        <div>
           
                <TitleCart>
                        <h2>Carrinho de compras</h2>
                </TitleCart>

                {cardItens.length > 0 ?
                    <>
                    
                        <CartItensUl>
                            
                            {cardItens.map(elem => {
                                return(<li key={elem.id}>
                                        <img src={elem.img} alt="" />
                                        <div>
                                            <h3>{elem.name}</h3> 
                                            <span>{elem.category}</span>
                                        </div> 
                                        
                                        <button onClick={() => {removeItens(elem)
                                        removePrice(elem.price)
                                        toast.success("Item removido")}}>Remover item</button>
                                </li>)})
                            }
                            
                        </CartItensUl>
                    
                        <TotalValue price={price} setCardItens={setCardItens} setPrice={setPrice}></TotalValue>
                    </>
                :
                <NoItensCard>
                    <p>Sem itens no Carinho!</p>
                    <span>Adicione itens</span>
                </NoItensCard>
            }    
        </div>
    )
}

export default CardItens