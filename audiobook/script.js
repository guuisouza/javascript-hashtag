const botaoPlayPause = document.getElementById("play-pause")
const botaoProximaFaixa = document.getElementById("proximo")
const botaoAnteriorFaixa = document.getElementById("anterior")
const capitulo = document.getElementById("capitulo")
const audioCapitulo = document.getElementById("audio-capitulo")

const numeroCapitulos = 10
let isPlaying = 0
let capituloAtual = 1


function tocarFaixa () {
    audioCapitulo.play()
    botaoPlayPause.classList.remove("bi-play-circle-fill")
    botaoPlayPause.classList.add("bi-pause-circle-fill")
}

function pausarFaixa () {
    audioCapitulo.pause()
    botaoPlayPause.classList.remove("bi-pause-circle-fill")
    botaoPlayPause.classList.add("bi-play-circle-fill")
}

function playOrPause () {
    if (isPlaying === 0) {
        tocarFaixa()
        isPlaying = 1
    } else {
        pausarFaixa()
        isPlaying = 0
    }
}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1
    } else {
        capituloAtual += 1
    }

    capitulo.innerText = `Capítulo ${capituloAtual}`
    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`
    tocarFaixa()
    isPlaying = 1
}

function voltaFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos
    } else {
        capituloAtual -= 1
    }

    capitulo.innerText = `Capítulo ${capituloAtual}`
    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`
    tocarFaixa()
    isPlaying = 1
}

botaoPlayPause.addEventListener('click', playOrPause)
botaoProximaFaixa.addEventListener('click', proximaFaixa)
botaoAnteriorFaixa.addEventListener('click', voltaFaixa)