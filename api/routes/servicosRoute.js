const { Router } = require('express')
const ServicosController = require('../controllers/ServicosController')

const router = Router()

router.get('/servicos', ServicosController.TodosServicos)
router.get('/servicos/:id', ServicosController.pegaUmServico)
router.post('/servicos', ServicosController.criaServico)
router.put('/servicos/:id', ServicosController.atualizaServico)
router.delete('/servicos/:id', ServicosController.apagaServico)


module.exports = router