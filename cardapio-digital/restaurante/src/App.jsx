import { useState } from "react";
import Restaurante from "./assets/hashtaurante.webp";
import "./App.css";
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio"
import { pratosPrincipais, sobremesas, bebidas } from './cardapio'

export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  //Use state -> cria uma variavel e uma função, que será usada para controlar o estado da variável
  const [paginaSelecionada, setPaginaSelecionada] = useState(0)

  return (
    <>
      {/*Imagem em JSX com className*/}
      <img src={Restaurante} alt="imagem-restaurante" className="capa"/> 
      <Navegacao setPaginaSelecionada={setPaginaSelecionada}/>
        
      <div className="menu">
        {paginasMenu[paginaSelecionada].map(item => 
        <ItemCardapio 
          nome={item.nome} 
          preco={item.preco} 
          imagem={item.imagem} 
          descricao={item.descricao}
        />)}
      </div>
    </>
  )
}

