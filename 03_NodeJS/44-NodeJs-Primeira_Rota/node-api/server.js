const express = require('express')
const app = express()
app.get('/',(requisicao, resposta) =>{
    resposta.send("Olá Mundo!!")
})
app.listen (3001)