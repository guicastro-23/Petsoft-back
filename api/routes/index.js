const bodyParser = require('body-parser')
const clientes = require('./clientesRoute')
const servicos = require('./servicosRoute')
const usuarios = require('./usuariosRoute')
const pets = require('./petsRoute')

module.exports = app => {
    app.use(
    bodyParser.json(),
    clientes,
    servicos,
    usuarios,
    pets
    )
   
}