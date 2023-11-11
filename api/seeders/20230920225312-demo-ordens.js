'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Ordens', [
      {
        date_ser: '2023-02-01',
        horario: '14:00:00', 
        valor_total: 50.0, 
        descricao: 'Nenhuma',
        pets_id: 1,
        usuarios_id: 1,
        clientes_id: 1,
        servicos_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Ordens', null, {});
  }
};