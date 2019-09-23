const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//iniciando app
const app = express()

//iniciando o DB
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi',{useNewUrlParser: true})
requireDir('./models')

const Product = mongoose.model('Product')

//primeira rota
app.get('/',(requisicao, resposta) =>{
    Product.create({
        title: 'React Nat',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    })
    return resposta.send("Olá Guilherme!!")
})
app.listen (3001)