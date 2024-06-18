'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('grupoEtnicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lencas: {
        type: Sequelize.INTEGER
      },
      tolupan: {
        type: Sequelize.INTEGER
      },
      chortis: {
        type: Sequelize.INTEGER
      },
      mestizo: {
        type: Sequelize.INTEGER
      },
      tawaka: {
        type: Sequelize.INTEGER
      },
      garifuna: {
        type: Sequelize.INTEGER
      },
      otros: {
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
    await queryInterface.dropTable('grupoEtnicos');
  }
};