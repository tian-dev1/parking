'use strict';
module.exports = (sequelize, DataTypes) => {
  const ParkingSpot = sequelize.define('ParkingSpot', {
    type: { type: DataTypes.STRING, allowNull: false },
    isOccupied: { type: DataTypes.BOOLEAN, allowNull: false },
    statusId: { type: DataTypes.INTEGER, allowNull: false }
  }, {});

  ParkingSpot.associate = (models) => {
    ParkingSpot.belongsTo(models.Status, { foreignKey: 'statusId' });
    ParkingSpot.hasMany(models.ParkingEntry, { foreignKey: 'parkingSpotId' });
  };

  return ParkingSpot;
};