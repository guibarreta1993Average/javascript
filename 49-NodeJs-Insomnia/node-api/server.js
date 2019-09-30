const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//iniciando app
const app = express()

//iniciando o DB
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi',{useNewUrlParser: true})
requireDir('./models')

// const Product = mongoose.model('Product')

//primeira rota
app.use('/api', require('./routes'))
app.listen (3001)