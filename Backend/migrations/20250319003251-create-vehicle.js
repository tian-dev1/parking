'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      licensePlate: {
        type: Sequelize.STRING,
        allowNull: false, 
        unique: true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isElectric: {
        type: Sequelize.BOOLEAN,
        allowNull: false 
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Status', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vehicles');
  }
};