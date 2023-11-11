const database = require('../models')

class ServicosController {
    static async TodosServicos(req, res){
        try{
            const todosServicos = await database.Servicos.findAll()
            return res.status(200).json(todosServicos)
        }catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmServico(req,res){
       const { id } = req.params 
       try{
        const umaPessoa = await database.Servicos.findOne( {
            where: { 
                id:Number(id)
             }
        })    
             return res.status(200).json(umaPessoa)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criaServico(req,res){
        const novoServico = req.body
        try{
            const novoServicoCriado = await database.Servicos.create(novoServico)
            return res.status(200).json(novoServicoCriado)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaServico(req,res){
        const { id } = req.params
        const novasInfos = req.body

        try{
            await database.Servicos.update(novasInfos, {where: { id: Number(id) }})
            const servicoAtualizado = await database.Servicos.findOne( {
                where: { id: Number(id) }})
            return res.status(200).json(servicoAtualizado)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

 
    static async apagaServico(req, res) {
        const { id } = req.params
        try{
            await database.Servicos.destroy( {where: { id: Number(id) }})
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error){
            return res.status(500).json(error.message)
        }
    }
    
}

module.exports = ServicosController