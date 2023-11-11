const Sequelize = require('sequelize')
const db = require('./db');

const Clientes = db.define('clientes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING, 
        allowNull: false,
    },
    logradouro: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});

// Criar a tabela
//Clientes.sync();

// Verifica se ha alguma diferença na tabela, realiza a alteração
//Clientes.sync({alter: true})

module.exports = Clientes;