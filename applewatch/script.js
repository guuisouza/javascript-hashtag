const imagemVisualizacao = document.getElementById("imagem-visualizacao")
const tituloProduto = document.getElementById("titulo-produto")
const nomeCorSelecionada = document.getElementById("nome-cor-selecionada")
const id0ImagemMiniatura = document.getElementById("0-imagem-miniatura")
const id1ImagemMiniatura = document.getElementById("1-imagem-miniatura")
const id2ImagemMiniatura = document.getElementById("2-imagem-miniatura")

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
}

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
}

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
}

const listaOpcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoesDeTamanho = ["41 mm", "45 mm"]

// console.log(minhaLista[3]) - pegar um índice da lista
// console.log(meiaNoite.pasta) - pegar um valor de um campo do objeto

let imagemSelecionada = 1
let tamanhoSelecionado = 1
let corSelecionada = 1

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector("[name='opcao-imagem']:checked").id // : representa o estado atual
    imagemSelecionada = idOpcaoSelecionada.charAt(0)
    imagemVisualizacao.src = `./imagens/opcoes-cores/${listaOpcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`
}

function trocarTamanho() {
    // atualizar variavel tamanhoSelecionado
    const idOpcaoSelecionada = document.querySelector("[name='opcao-tamanho']:checked").id
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0)
    // mudar o titulo do produto
    tituloProduto.innerText = `Pulseira loop esportiva ${listaOpcoesCores[corSelecionada].nome} 
        para caixa de ${opcoesDeTamanho[tamanhoSelecionado]}`
    // mudar o tamanho da imagem de acordo com a opção
    if (tamanhoSelecionado == 0) {
        imagemVisualizacao.classList.add("caixa-pequena")
    } else {
        imagemVisualizacao.classList.remove("caixa-pequena")
    }
}

function trocarCor() {
    // atualizar variavel corSelecionada
    const idOpcaoSelecionada = document.querySelector("[name='opcao-cor']:checked").id
    corSelecionada = idOpcaoSelecionada.charAt(0)
    // mudar o titulo do produto e descricao
    tituloProduto.innerText = `Pulseira loop esportiva ${listaOpcoesCores[corSelecionada].nome} 
        para caixa de ${opcoesDeTamanho[tamanhoSelecionado]}`

    nomeCorSelecionada.innerText = `Cor - ${listaOpcoesCores[corSelecionada].nome}`
    // mudar a cor da miniatura exibida
    id1ImagemMiniatura.src = `./imagens/opcoes-cores/${listaOpcoesCores[corSelecionada].pasta}/imagem-1.jpeg`
    id0ImagemMiniatura.src = `./imagens/opcoes-cores/${listaOpcoesCores[corSelecionada].pasta}/imagem-0.jpeg`
    id2ImagemMiniatura.src = `./imagens/opcoes-cores/${listaOpcoesCores[corSelecionada].pasta}/imagem-2.jpeg`
    // mudar a cor da imagem de acordo com a opção
    imagemVisualizacao.src = `./imagens/opcoes-cores/${listaOpcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`
}