'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GuiasDesarrollada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GuiasDesarrollada.belongsTo(models.Monitoreo)
    }
  }
  GuiasDesarrollada.init({
    desarrolladas: DataTypes.INTEGER,
    noDesarrolladas: DataTypes.INTEGER,
    supervisor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GuiasDesarrollada',
  });
  return GuiasDesarrollada;
};