'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Partos.belongsTo(models.Monitoreo)
    }
  }
  Partos.init({
    hospital: DataTypes.STRING,
    comunidad: DataTypes.STRING,
    consulta: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Partos',
  });
  return Partos;
};