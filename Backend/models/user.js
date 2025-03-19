'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    fullName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    passwordHash: { type: DataTypes.STRING, allowNull: false },
    statusId: { type: DataTypes.INTEGER, allowNull: false },
  }, { timestamps: true,
    defaultScope: {
      attributes: { exclude: ['passwordHash'] }
    },
    scopes: {
      withPassword: { attributes: { include: ['passwordHash'] } }
    }
   });

  User.associate = (models) => {
    User.belongsTo(models.Status, { foreignKey: 'statusId', as: 'status' });
  };

  return User;
};