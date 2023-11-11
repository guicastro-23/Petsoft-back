
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ordens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_ser: {
        type: Sequelize.DATEONLY
      },
      horario: {
        type: Sequelize.DATE
      },
      valor_total: {
        type: Sequelize.FLOAT
      },
      descricao: {
        type: Sequelize.STRING
      },
      pets_id: {
        allowNull:null,
        type:Sequelize.INTEGER,
        references: {model:'Pets', key:'id'}
      },
      usuarios_id: {
        allowNull:null,
        type:Sequelize.INTEGER,
        references: {model:'Usuarios', key:'id'}
      },
      clientes_id: {
        allowNull:null,
        type:Sequelize.INTEGER,
        references: {model:'Clientes', key:'id'}
      },
      servicos_id: {
        allowNull:null,
        type:Sequelize.INTEGER,
        references: {model:'Servicos', key:'id'}
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
    await queryInterface.dropTable('Ordens');
  }
};