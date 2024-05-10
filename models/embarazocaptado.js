'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmbarazoCaptado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EmbarazoCaptado.belongsTo(models.Monitoreo)
    }
  }
  EmbarazoCaptado.init({
    antes: DataTypes.INTEGER,
    despues: DataTypes.INTEGER,
    semanas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EmbarazoCaptado',
  });
  return EmbarazoCaptado;
};