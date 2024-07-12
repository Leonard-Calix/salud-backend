'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Guias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      guia1PEmbarazo: {
        type: Sequelize.INTEGER
      },
      guia2PNacimiento: {
        type: Sequelize.INTEGER
      },
      guia3PPrimerMes: {
        type: Sequelize.INTEGER
      },
      guia4P1A3Meses: {
        type: Sequelize.INTEGER
      },
      guia5P4A6Meses: {
        type: Sequelize.INTEGER
      },
      guia6P6A8Meses: {
        type: Sequelize.INTEGER
      },
      guia7P9A12Meses: {
        type: Sequelize.INTEGER
      },
      guia8P12A17Meses: {
        type: Sequelize.INTEGER
      },
      guia9P18A23Meses: {
        type: Sequelize.INTEGER
      },
      guia10P2A3Anios: {
        type: Sequelize.INTEGER
      },
      guia11P3Anios: {
        type: Sequelize.INTEGER
      },
      guia12P4Anios: {
        type: Sequelize.INTEGER
      },
      guia13P5Anios: {
        type: Sequelize.INTEGER
      },
      guia14P4Anios: {
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
    await queryInterface.dropTable('Guias');
  }
};