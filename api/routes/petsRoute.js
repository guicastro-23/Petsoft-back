const { Router } = require('express')
const PetController = require('../controllers/PetController')

const router = Router()

router.get('/pets', PetController.TodosPets)
router.get('/pets/:id', PetController.PegarUmPet)
router.post('/pets', PetController.CriarPet)
router.put('/pets/:id', PetController.AtualizarPet)
router.delete('/pets/:id',PetController.ApagarPet)


module.exports = router 