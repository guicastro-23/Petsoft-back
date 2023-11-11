const sequelize = require('../sequelize');


function getTodosServicos() {
    return sequelize.query('SELECT * FROM servico');
}


/*function insereServico(req,res){
    
        const novoServico = Servico.create({
            id: req.body.id,
            valor: req.body.valor,
            descricao: req.body.descricao,
            nome: req.body.nome
        });

        res.json(novoServico);
   
    }

*/


module.exports = {
    getTodosServicos,

}