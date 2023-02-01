const porta = 3003
const express = require('express')
const app = express()
const data = require('./data')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(data.getProducts())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(data.getProduct(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const product = data.saveProducts({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.put('/produtos/:id', (req, res, next) => {
    const product = data.saveProducts({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.delete('/produtos/:id', (req, res, next) => {
    const product = data.deleteProduct(req.params.id)
    res.send(product)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})