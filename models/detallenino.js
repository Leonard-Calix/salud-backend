'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetalleNino extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetalleNino.belongsTo(models.Monitoreo)
    }
  }
  DetalleNino.init({
    rango1: DataTypes.DOUBLE,
    rango2: DataTypes.DOUBLE,
    rango3: DataTypes.DOUBLE,
    femenino: DataTypes.INTEGER,
    masculino: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetalleNino',
  });
  return DetalleNino;
};