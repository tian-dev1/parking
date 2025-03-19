'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ParkingEntries', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      vehicleId: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'Vehicles', key: 'id' } },
      parkingSpotId: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'ParkingSpots', key: 'id' } },
      checkInTime: { type: Sequelize.DATE, allowNull: false },
      checkOutTime: { type: Sequelize.DATE, allowNull: true },
      totalCharge: { type: Sequelize.INTEGER, allowNull: true },
      statusId: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'Status', key: 'id' } },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ParkingEntries');
  }
};