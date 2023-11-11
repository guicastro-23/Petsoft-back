'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pets', [
      {
        nome: 'Rex',
        data_nasc: '2018-05-15',
        pelagem: 'Curto',
        porte: 'Grande',
        agressivo: false,
        observacoes: 'Nenhum problema de saúde conhecido.',
        clientes_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pets',null,{})
  }
};
