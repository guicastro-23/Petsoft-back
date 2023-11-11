const express = require('express');
const Sequelize = require('sequelize')
const { Clientes } = require('../modelos/clientes');



/*
module.exports = {
    async create(req, res) {
        try {
            const { nome, logradouro, telefone } = req.body;

            if (!nome || !logradouro || !telefone) {
                return res.status(400).json({
                    erro: true,
                    mensagem: 'Dados Incompletos.'
                });
            }

            // Criar um novo cliente
            const novoCliente = await Clientes.create({
                nome,
                logradouro,
                telefone,
            });

            return res.status(201).json({
                erro: false,
                mensagem: 'Cliente cadastrado com sucesso!',
                cliente: novoCliente,
            });
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            return res.status(500).json({
                erro: true,
                mensagem: 'Erro interno do servidor ao cadastrar cliente.',
            });
        }
    }
}

*/


/*
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.send("Página Inicial");
});

router.post("/", async (req, res) => {
  try {
    const { nome, logradouro, telefone } = req.body;

    if (!nome || !logradouro || !telefone) {
      return res.status(400).json({
        erro: true,
        mensagem: 'Dados Incompletos.'
      });
    }

    // Criar um novo cliente
    const novoCliente = await Clientes.create({
      nome,
      logradouro,
      telefone,
    });

    return res.status(201).json({
      erro: false,
      mensagem: 'Cliente cadastrado com sucesso!',
      cliente: novoCliente,
    });
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error);
    return res.status(500).json({
      erro: true,
      mensagem: 'Erro interno do servidor ao cadastrar cliente.',
    });
  }
});

module.exports = router;
*/