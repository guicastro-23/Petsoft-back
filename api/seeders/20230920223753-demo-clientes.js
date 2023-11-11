'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Clientes', [
      {
        nome: 'Guilherme de Oliveira Castro',
        logradouro: 'Rua Valério Ronchi',
        telefone: '42999074073',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Clientes',null,{})
  }
};
