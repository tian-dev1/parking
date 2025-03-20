'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define('Rate', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    type: { type: DataTypes.STRING, allowNull: false },
    hourlyCost: { type: DataTypes.INTEGER, allowNull: false },
    statusId: { type: DataTypes.INTEGER, allowNull: false }
  }, {});

  Rate.associate = (models) => {
    Rate.belongsTo(models.Status, { foreignKey: 'statusId', as: 'status' });
  };

  return Rate;
};