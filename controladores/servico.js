const {getTodosServicos} = require('../serviços/servico');

async function getServicos(req, res){
    try{
        const [results] = await getTodosServicos()
        res.json(results);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getServicos,

}