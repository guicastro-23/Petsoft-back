const Router =require("express");
const {getServicos} = require('../controladores/servico')

const router = Router()

router.get('/', getServicos)
    

router.post('/',(req,res) => {
    res.send('Post')
})
   

router.patch('/', (req,res) => {
    res.send('PAtch')
})

router.delete('/', (req,res) => {
    res.send('delete')
})

module.exports = router;


