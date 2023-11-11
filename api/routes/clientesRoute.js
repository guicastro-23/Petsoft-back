const { Router } = require('express')
const ClienteController = require('../controllers/ClienteController')

const router = Router()

router.get('/clientes', ClienteController.TodosClientes)
router.get('/clientes/:id', ClienteController.pegaUmCliente)
router.post('/clientes', ClienteController.criaCliente)
router.put('/clientes/:id', ClienteController.atualizaCliente)
router.delete('/clientes/:id', ClienteController.apagaCliente)
router.get('/clientes/:clienteId/ordens/:ordemId', ClienteController.pegaUmaOrdem)
module.exports = router