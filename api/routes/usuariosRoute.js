const { Router} = require('express')
const UsuarioController =require('../controllers/UsuarioController')

const router = Router()

router.get('/usuarios', UsuarioController.TodosUsuarios)
router.get('/usuarios/:id', UsuarioController.PegarUmUsuario)
router.post('/usuarios', UsuarioController.criaUsuario)
router.put('/usuarios/:id', UsuarioController.atualizaUsuario)
router.delete('/usuarios/:id', UsuarioController.apagarUsuario)

module.exports = router