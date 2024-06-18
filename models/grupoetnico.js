'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GrupoEtnico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GrupoEtnico.belongsTo(models.Monitoreo)
    }
  }
  GrupoEtnico.init({
    lencas: DataTypes.INTEGER,
    tolupan: DataTypes.INTEGER,
    chortis: DataTypes.INTEGER,
    mestizo: DataTypes.INTEGER,
    tawaka: DataTypes.INTEGER,
    garifuna: DataTypes.INTEGER,
    otros: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GrupoEtnico',
  });
  return GrupoEtnico;
};