'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InscritoRnp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      InscritoRnp.belongsTo(models.Monitoreo)
    }
  }
  InscritoRnp.init({
    inscritos: DataTypes.INTEGER,
    Noinscritos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InscritoRnp',
  });
  return InscritoRnp;
};