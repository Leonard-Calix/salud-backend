'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NinoEvaluados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NinoEvaluados.belongsTo(models.Monitoreo)
    }
  }
  NinoEvaluados.init({
    normal: DataTypes.INTEGER,
    moderada: DataTypes.INTEGER,
    severo: DataTypes.INTEGER,
    otro: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NinoEvaluados',
  });
  return NinoEvaluados;
};