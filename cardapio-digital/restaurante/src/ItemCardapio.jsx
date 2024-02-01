export function ItemCardapio (props) { // props contem um objeto que terá as informacoes que o componente precisa
    return(
        <div className="container-item-cardapio">
            <div>
                <h2>{props.nome}</h2>
                <p>{props.preco}</p>
                <p>{props.descricao}</p>
            </div>
            <img src={props.imagem} alt="" />
        </div>
    )
}