'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Servicos.hasMany(models.Ordens,{
        foreignKey: 'servicos_id'
      })
    }
  }
  Servicos.init({
    nome: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Servicos',
  });
  return Servicos;
};