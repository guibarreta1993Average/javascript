const express = require('express')
const mongoose = require('mongoose')

//iniciando app
const app = express()

//iniciando o DB
mongoose.connect('mongodb://192.168.99.100:27017',{useNewUrlParser: true})

//primeira rota
app.get('/',(requisicao, resposta) =>{
    resposta.send("Olá Gui!!")
})
app.listen (3001)