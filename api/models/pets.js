'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pets.hasMany(models.Ordens, {
        foreignKey: 'pets_id'
      })
      Pets.belongsTo(models.Clientes, {
        foreignKey: 'clientes_id'
      })
    }
  }
  Pets.init({
    nome: DataTypes.STRING,
    data_nasc: DataTypes.DATEONLY,
    pelagem: DataTypes.STRING,
    porte: DataTypes.STRING,
    agressivo: DataTypes.BOOLEAN,
    observacoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};