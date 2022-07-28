import Header from './components/headerHambu';
import './App.css';
import ShowProdutcs from './components/showProducts';
import { useEffect, useState } from 'react';
import CardItens from './components/cardProducts';
import { GlobalStyle } from './style/globalStyle';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [cardItens, setCardItens] = useState([])
  const [price, setPrice] = useState(0)

  useEffect(() => {
    setLoading(true)
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products").then(res => res.json()).then(res => {setProducts(res)
    setFilteredProducts(res)}).finally(setTimeout(() => setLoading(false), 500))
  }, [])

  function filtred(product){
    product ? setFilteredProducts(products.filter(elem => elem.name.toLowerCase().includes(product.toLowerCase()))) : setFilteredProducts(products) 
  }

  function addPrice(value){
    setPrice(price + value)
  }
  function removePrice(value){
    setPrice(price - value)
  }

  return (
    <div>
      <GlobalStyle />
      <Header products={products} filtred={filtred}></Header>
      <div className='conteiner-conteudo'>
        {
          loading ? 
          <div>Carregando...</div>
          :
          <ShowProdutcs itens={filteredProducts} filtred={filtred} setCardItens={setCardItens} cardItens={cardItens} addPrice={addPrice}/>
        
        }
        {
          filteredProducts.length > 0 && <CardItens cardItens={cardItens} setCardItens={setCardItens} price={price} removePrice={removePrice} setPrice={setPrice}/>
        }
        
      </div>
    </div>
  );
}

export default App;
