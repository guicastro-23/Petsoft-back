const {getTodosPets} = require("../serviços/pet")

async function getPets(re,res){
    try{
        const[results] = await getTodosPets()
        res.json(results)
    } catch (error){
        res.status(500).json({ error: error.message });
    }
}

module.exports ={
    getPets
}