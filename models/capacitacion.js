'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Capacitacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Capacitacion.belongsTo(models.Monitoreo)
    }
  }
  Capacitacion.init({
    usoGuia: DataTypes.INTEGER,
    nousoGuia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Capacitacion',
  });
  return Capacitacion;
};