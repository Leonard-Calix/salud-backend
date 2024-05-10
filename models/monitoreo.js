'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Monitoreo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Monitoreo.hasMany(models.CuidadorPrimario)
      Monitoreo.hasMany(models.DetalleNino)
      Monitoreo.hasMany(models.EmbarazoCaptado)
      Monitoreo.hasMany(models.InscritoRnp)
      Monitoreo.hasMany(models.Ninos)
      Monitoreo.hasMany(models.NumeroFamAtendidas)
      Monitoreo.hasMany(models.Partos)
      Monitoreo.hasMany(models.Vacunacion)
      Monitoreo.belongsTo(models.Community)
    }
  }
  Monitoreo.init({
    famPriorizadas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Monitoreo',
  });
  return Monitoreo;
};