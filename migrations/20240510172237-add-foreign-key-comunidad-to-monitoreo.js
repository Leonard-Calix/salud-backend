'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all(
        [
          queryInterface.addColumn('Monitoreos', 'CommunityId', {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
              model: 'Communities',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }, { transaction: t }),

          queryInterface.addColumn('Monitoreos', 'UserId', {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
              model: 'Users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }, { transaction: t })
        ]
      );
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all(
        [
          queryInterface.removeColumn('Monitoreos', 'CommunityId', { transaction: t }),
          queryInterface.removeColumn('Monitoreos', 'UserId', { transaction: t }),

        ]
      );
    });
  }
};
