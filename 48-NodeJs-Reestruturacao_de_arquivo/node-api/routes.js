const express = require('express')
const routes = express.Router()


routes.get('/',(requisicao, resposta) =>{
    // Product.create({
    //     title: 'React Nat',
    //     description: 'Build native apps with React',
    //     url: 'http://github.com/facebook/react-native'
    // })
    return resposta.send("Olá Guilherme!!")
})

module.exports = routes