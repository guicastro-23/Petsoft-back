'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Servicos', [
      {
        nome: 'Banho e Tosa',
        valor: 60.0,
        descricao: 'Pacote completo de banho e tosa para animais de estimação.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Hospedagem',
        valor: 40.0,
        descricao: 'Hospedagem de curto prazo para animais de estimação.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Corte de Unhas',
        valor: 15.0,
        descricao: 'Corte de unhas para animais de estimação.',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Servicos',null,{})
  }
};
