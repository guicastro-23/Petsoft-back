'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clientes.hasMany(models.Pets, {
        foreignKey: 'clientes_id'
      })
      Clientes.hasMany(models.Ordens, {
        foreignKey: 'clientes_id'
      })
    }
  }
  Clientes.init({
    nome: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clientes',
  });
  return Clientes;
};