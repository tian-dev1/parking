'use strict';
module.exports = (sequelize, DataTypes) => {
  const ParkingEntry = sequelize.define('ParkingEntry', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    vehicleId: { type: DataTypes.INTEGER, allowNull: false },
    parkingSpotId: { type: DataTypes.INTEGER, allowNull: false },
    checkInTime: { type: DataTypes.DATE, allowNull: false },
    checkOutTime: { type: DataTypes.DATE, allowNull: true },
    totalCharge: { type: DataTypes.INTEGER, allowNull: true },
    statusId: { type: DataTypes.INTEGER, allowNull: false }
  }, {});

  ParkingEntry.associate = (models) => {
    ParkingEntry.belongsTo(models.Vehicle, { foreignKey: 'vehicleId', as: "vehicle" });
    ParkingEntry.belongsTo(models.ParkingSpot, { foreignKey: 'parkingSpotId', as: "parkingSpot" });
    ParkingEntry.belongsTo(models.Status, { foreignKey: 'statusId', as: "status" });
  };

  return ParkingEntry;
};