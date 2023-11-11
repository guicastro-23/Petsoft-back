const Router = require("express");
const { getPets } = require("../controladores/pet")

const router = Router()


router.get('/', getPets)
    

router.post('/', (req,res) => {
    
     res.send('Post')
})

router.patch('/', (req,res) => {
    res.send('PAtch')
})

router.delete('/', (req,res) => {
    res.send('delete')
})

module.exports = router;