'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Status', [
      { name: 'Active', description: 'Record is active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Inactive', description: 'Record is inactive', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Status', null, {});
  }
};
