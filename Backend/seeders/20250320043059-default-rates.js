'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rates', [
      { type: 'Light Vehicle', hourlyCost: 62, statusId: 1, createdAt: new Date(), updatedAt: new Date() },
      { type: 'Motorcycle', hourlyCost: 120, statusId: 1, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rates', null, {});
  }
};
