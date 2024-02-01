export function Navegacao (props) {
    return(
        <div className="navegacao">
            {/* O htmlFor referencia o elemento que o label será ligado */}
            <input 
                type="radio" 
                name="opcao-pagina" 
                id="pagina-0" 
                defaultChecked 
                onClick={
                    () => props.setPaginaSelecionada(0)
                }/>
            <label htmlFor="pagina-0">Pratos Principais</label>
            <input 
                type="radio" 
                name="opcao-pagina" 
                id="pagina-1" 
                onClick= {
                    () => props.setPaginaSelecionada(1)
                }/>
            <label htmlFor="pagina-1">Sobremesas</label>
            <input 
                type="radio" 
                name="opcao-pagina" 
                id="pagina-2" 
                onClick= {
                    () => props.setPaginaSelecionada(2)
                }/>
            <label htmlFor="pagina-2">Bebidas</label> 
        </div>
    )
}