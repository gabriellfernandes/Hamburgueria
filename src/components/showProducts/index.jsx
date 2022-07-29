import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NoItens, UlStyle } from "./style"

function ShowProdutcs({itens, filtred, setCardItens, addPrice, cardItens}){
    
    return  itens.length ?
                <UlStyle>
                    {itens.map(elem => {
                        return(<li key={elem.id} >
                            <img src={elem.img} alt="product" />
                            <h2>{elem.name}</h2>
                            <p>{elem.category}</p>
                            <span>{`R$ ${elem.price.toFixed(2)}`}</span>
                            <button onClick={() => {const item = cardItens.find(item => item.id === elem.id)  
                            if(item  === undefined){ 
                                toast.success("item adicionado no carrinho!")
                                setCardItens((oldItens) => [...oldItens, elem]) 
                                addPrice(elem.price)
                            }else{
                                toast.error("Produto já está no carrinho!")
                            }
                          
                                
                            }}>Adicionar item</button>
                        </li>)})}
                </UlStyle>
            : 
            (<NoItens>
                <p>Não temos esse Produto</p>
                <button onClick={() => filtred()}> Mostrar todos os Produtos</button>
            </NoItens>)
}

export default ShowProdutcs