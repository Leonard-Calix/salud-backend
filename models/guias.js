'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Guias.belongsTo(models.Monitoreo)
    }
  }
  Guias.init({
    guia1PEmbarazo: DataTypes.INTEGER,
    guia2PNacimiento: DataTypes.INTEGER,
    guia3PPrimerMes: DataTypes.INTEGER,
    guia4P1A3Meses: DataTypes.INTEGER,
    guia5P4A6Meses: DataTypes.INTEGER,
    guia6P6A8Meses: DataTypes.INTEGER,
    guia7P9A12Meses: DataTypes.INTEGER,
    guia8P12A17Meses: DataTypes.INTEGER,
    guia9P18A23Meses: DataTypes.INTEGER,
    guia10P2A3Anios: DataTypes.INTEGER,
    guia11P3Anios: DataTypes.INTEGER,
    guia12P4Anios: DataTypes.INTEGER,
    guia13P5Anios: DataTypes.INTEGER,
    guia14P4Anios: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Guias',
  });
  return Guias;
};