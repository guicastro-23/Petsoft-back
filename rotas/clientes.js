const express = require('express');
const router = express.Router();

const {postClientes} = require("../controladores/clientes")




router.get('/', (req,res) => {
    
     res.send('get')
})
    

router.post("/clientes", postClientes.create);


router.patch('/', (req,res) => {
    res.send('PAtch')
})

router.delete('/', (req,res) => {
    res.send('delete')
})

module.exports = router;