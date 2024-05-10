'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CuidadorPrimario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CuidadorPrimario.belongsTo(models.Monitoreo)
    }
  }
  CuidadorPrimario.init({
    madre: DataTypes.INTEGER,
    padre: DataTypes.INTEGER,
    abuela: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CuidadorPrimario',
  });
  return CuidadorPrimario;
};