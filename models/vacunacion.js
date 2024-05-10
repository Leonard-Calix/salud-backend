'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacunacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vacunacion.belongsTo(models.Monitoreo)
    }
  }
  Vacunacion.init({
    hepatitis: DataTypes.INTEGER,
    bcg: DataTypes.INTEGER,
    pentavalente: DataTypes.INTEGER,
    rotavirus: DataTypes.INTEGER,
    srp: DataTypes.INTEGER,
    nuemococo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vacunacion',
  });
  return Vacunacion;
};