'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rates', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      type: { type: Sequelize.STRING, allowNull: false },
      hourlyCost: { type: Sequelize.INTEGER, allowNull: false },
      statusId: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'Status', key: 'id' } },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rates');
  }
};