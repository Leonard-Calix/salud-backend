'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NumeroIntervenciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NumeroIntervenciones.belongsTo(models.Monitoreo)
    }
  }
  NumeroIntervenciones.init({
    intervino: DataTypes.INTEGER,
    noIntervino: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NumeroIntervenciones',
  });
  return NumeroIntervenciones;
};