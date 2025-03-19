'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    licensePlate: { type: DataTypes.STRING, allowNull: false, unique: true },
    type: { type: DataTypes.STRING, allowNull: false },
    isElectric: { type: DataTypes.BOOLEAN, allowNull: false },
    statusId: { type: DataTypes.INTEGER, allowNull: false }
  }, {});

  Vehicle.associate = (models) => {
    Vehicle.belongsTo(models.Status, { foreignKey: 'statusId', as: 'status' });
    Vehicle.hasMany(models.ParkingEntry, { foreignKey: 'vehicleId' });
  };

  return Vehicle;
};