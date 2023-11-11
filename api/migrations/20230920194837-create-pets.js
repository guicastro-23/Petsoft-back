'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      data_nasc: {
        type: Sequelize.DATEONLY
      },
      pelagem: {
        type: Sequelize.STRING
      },
      porte: {
        type: Sequelize.STRING
      },
      agressivo: {
        type: Sequelize.BOOLEAN
      },
      observacoes: {
        type: Sequelize.STRING
      },
      clientes_id:{
        allowNull:null,
        type:Sequelize.INTEGER,
        references: {model:'Clientes', key:'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pets');
  }
};