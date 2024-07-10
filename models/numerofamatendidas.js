'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NumeroFamAtendidas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NumeroFamAtendidas.belongsTo(models.Monitoreo)
    }
  }
  NumeroFamAtendidas.init({
    ejecutadas: DataTypes.DOUBLE,
    programadas: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'NumeroFamAtendidas',
  });
  return NumeroFamAtendidas;
};