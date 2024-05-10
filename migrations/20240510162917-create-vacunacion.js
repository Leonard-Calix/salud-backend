'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vacunacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hepatitis: {
        type: Sequelize.INTEGER
      },
      bcg: {
        type: Sequelize.INTEGER
      },
      pentavalente: {
        type: Sequelize.INTEGER
      },
      rotavirus: {
        type: Sequelize.INTEGER
      },
      srp: {
        type: Sequelize.INTEGER
      },
      nuemococo: {
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
    await queryInterface.dropTable('Vacunacions');
  }
};