const http = require('http'); //Modulo http do node
const express = require('express') //Importando recurso externo
const app = express();
const httpServer = http.createServer(app)
const io = require('socket.io')(httpServer)

// evento que acontece quando algum usuário acessa o sistema
io.addListener('connection', (socket) => {
    console.log('um usuário conectou')
    socket.addListener('nova mensagem', (msg) => {
        io.emit("nova mensagem", msg)
    })
}) 

app.use(express.static('public'))
httpServer.listen(1000) // Adicione o endereço se desejar (1000, 'seu ipv4')

//websocket ou socket: canal de comunicacao que está sempre aberto com todos que acessam a página