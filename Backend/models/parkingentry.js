'use strict';
module.exports = (sequelize, DataTypes) => {
  const ParkingEntry = sequelize.define('ParkingEntry', {
    vehicleId: { type: DataTypes.INTEGER, allowNull: false },
    parkingSpotId: { type: DataTypes.INTEGER, allowNull: false },
    checkInTime: { type: DataTypes.DATE, allowNull: false },
    checkOutTime: { type: DataTypes.DATE, allowNull: true },
    totalCharge: { type: DataTypes.INTEGER, allowNull: true },
    statusId: { type: DataTypes.INTEGER, allowNull: false }
  }, {});

  ParkingEntry.associate = (models) => {
    ParkingEntry.belongsTo(models.Vehicle, { foreignKey: 'vehicleId' });
    ParkingEntry.belongsTo(models.ParkingSpot, { foreignKey: 'parkingSpotId' });
    ParkingEntry.belongsTo(models.Status, { foreignKey: 'statusId' });
  };

  return ParkingEntry;
};