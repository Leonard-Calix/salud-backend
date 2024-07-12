'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetalleNinos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rango1: {
        type: Sequelize.DOUBLE
      },
      rango2: {
        type: Sequelize.DOUBLE
      },
      rango3: {
        type: Sequelize.DOUBLE
      },
      femenino: {
        type: Sequelize.INTEGER
      },
      masculino: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DetalleNinos');
  }
};