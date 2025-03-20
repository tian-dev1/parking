'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password123', 10);

    return queryInterface.bulkInsert('Users', [
      {
        fullName: 'Cristian Arevalo',
        email: 'cristian@example.com',
        passwordHash: hashedPassword,
        statusId: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Camilo Perdomo',
        email: 'camilo@example.com',
        passwordHash: hashedPassword,
        statusId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};