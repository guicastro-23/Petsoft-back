const database = require('../models')

class UsuarioController {
    static async TodosUsuarios(req, res){
        try {
            const todosUsuarios = await database.Usuarios.findAll()
            return res.status(200).json(todosUsuarios)
        }catch(error){
            return res.status(500).json(error.message)
        }
      
    }

    static async PegarUmUsuario(req, res){
        const { id } = req.params
        try{
            const umUsuario = await database.Usuarios.findOne({
                where: {
                    id:Number(id)
                }
            })
            return res.status(200).json(umUsuario)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async criaUsuario(req,res) {
        const novoUsuario = req.params
        try{
            novoUsuarioCriado = await database.Usuarios.create(novoUsuario)
            return res.status(200).json(novoUsuarioCriado)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaUsuario(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try{
            await database.Usuarios.update(novasInfos, {where: { id: Number (id) }})
            const UsuariosAtualizados = await database.Usuarios.findOne( { where: { id: Number (id) }})
            return res.status(200).json(UsuariosAtualizados)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagarUsuario(req, res){
        const {id } = req.params
        try{
            await database.Usuarios.destroy( { where: {id:Number(id) }})
            return res.status(200).json({ mensagem: ` Id ${id} deletado`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }




    
}

module.exports = UsuarioController