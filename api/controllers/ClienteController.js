const { where } = require('sequelize')
const database =require('../models')

class ClienteController {
    static async TodosClientes(req, res){
        try {
            const todosClientes = await database.Clientes.findAll()
            return res.status(200).json(todosClientes)
        }catch(error){
            return res.status(500).json(error.message)
        }
      
    }

    static async pegaUmCliente(req,res){
        const { id } = req.params
        try{
          const UmCliente = await database.Clientes.findOne( {
            where: {
                id:Number(id) 
            }
        })
        return res.status(200).json(UmCliente)
        } catch (error) {
        return res.status(500).json(error.message)
        }
    }

    static async criaCliente(req, res) {
        const novoCliente = req.body
        try{
            const novoClienteCriado = await database.Clientes.create(novoCliente)
            return res.status(200).json(novoClienteCriado)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaCliente (req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try{
            await database.Clientes.update(novasInfos, {where: {id: Number(id) }})
            const clienteAtualizado = await database.Clientes.findOne( { where: {id:Number(id)}})
            return res.status(200).json(clienteAtualizado)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaCliente(req,res) {
        const { id } = req.params
        try{
            await database.Clientes.destroy( { where: {id:Number(id) }})
            return res.status(200).json({ mensagem: `id ${id} deletado`})

        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaOrdem(req,res){
        const { clienteId, ordemId  } = req.params
        try{
          const UmaOrdem = await database.Ordens.findOne( {
            where: {
                id: Number(ordemId), 
                clientes_id: Number(clienteId)

            }
        })
        return res.status(200).json(UmaOrdem)
        } catch (error) {
        return res.status(500).json(error.message)
        }
    }

}

module.exports = ClienteController