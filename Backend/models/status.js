'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING }
  }, { timestamps: true, tableName: 'status' });

  Status.associate = (models) => {
    Status.hasMany(models.User, { foreignKey: 'statusId', as: 'users' });
    Status.hasMany(models.Vehicle, { foreignKey: 'statusId', as: 'vehicles' });
    Status.hasMany(models.ParkingSpot, { foreignKey: 'statusId' });
    Status.hasMany(models.Rate, { foreignKey: 'statusId' });
    Status.hasMany(models.ParkingEntry, { foreignKey: 'statusId' });
  };

  return Status;
};
