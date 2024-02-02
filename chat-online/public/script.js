const botaoEnviar = document.getElementById("enviar")
const textoEnviar = document.getElementById("texto")
const chat = document.getElementById("mensagens")

const socket = io()

botaoEnviar.addEventListener('click', () => {
    if (textoEnviar.value !== '') {
        socket.emit('nova mensagem', textoEnviar.value)
        textoEnviar.value = ''
    }
})

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li') //<li></li>
    elementoMensagem.textContent = msg //<li>Olá</li>
    elementoMensagem.classList.add("mensagem") //<li class= "mensagem">Olá</li>
    chat.appendChild(elementoMensagem) //<div id= "mensagens"><li class= "mensagem">Olá</li></div>
})