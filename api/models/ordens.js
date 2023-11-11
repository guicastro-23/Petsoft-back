'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ordens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ordens.belongsTo(models.Pets, {
        foreignKey: 'pets_id'
      })
      Ordens.belongsTo(models.Clientes, {
        foreignKey: 'clientes_id'
      })
      Ordens.belongsTo(models.Usuarios, {
        foreignKey: 'usuarios_id'
      })
      Ordens.belongsTo(models.Servicos,{
        foreignKey: 'servicos_id'
      })
    }
  }
  Ordens.init({
    date_ser: DataTypes.DATEONLY,
    horario: DataTypes.DATE,
    valor_total: DataTypes.FLOAT,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ordens',
  });
  return Ordens;
};