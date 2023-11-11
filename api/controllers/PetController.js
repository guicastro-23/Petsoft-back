const database = require('../models')

class PetController {
    static async TodosPets(req,res){
        try{
            const todosPets = await database.Pets.findAll()
            return res.status(200).json(todosPets)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async PegarUmPet(req,res){
        const { id } = req.params
        try{
            const umPet = await database.Pets.findOne( {
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umPet)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async CriarPet(req, res){
        const novoPet = req.body
        try{
            const novoPetCriado = await database.Pets.create(novoPet)
            return res.status(200).json(novoPetCriado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async AtualizarPet(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try{
            await database.Pets.update(novasInfos, {where: {id: Number(id) }})
            const petAtualizado = await database.Pets.findOne( {where: {id:Number(id) }})
            return res.status(200).json(petAtualizado)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async ApagarPet(req,res){
        const { id } = req.params
        try{
            await database.Pets.destroy( {where: {id: Number(id)}})
            return res.status(200).json({ mensagem: `Id ${id} deletado`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PetController
