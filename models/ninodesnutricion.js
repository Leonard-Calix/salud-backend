'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NinoDesnutricion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NinoDesnutricion.belongsTo(models.Monitoreo)
    }
  }
  NinoDesnutricion.init({
    noDesnutridos: DataTypes.DOUBLE,
    desnutridos: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'NinoDesnutricion',
  });
  return NinoDesnutricion;
};