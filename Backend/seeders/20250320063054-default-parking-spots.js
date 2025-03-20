"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ParkingSpots", [
      {
        type: "PlazaMoto1",
        isOccupied: false,
        statusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "PlazaMoto2",
        isOccupied: false,
        statusId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "PlazaMoto3",
        isOccupied: false,
        statusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "PlazaMoto4",
        isOccupied: false,
        statusId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "PlazaMoto5",
        isOccupied: false,
        statusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "PlazaMoto6",
        isOccupied: false,
        statusId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "PlazaVehiculo1",
        isOccupied: true,
        statusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "PlazaVehiculo2",
        isOccupied: true,
        statusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "PlazaVehiculo3",
        isOccupied: true,
        statusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "PlazaVehiculo4",
        isOccupied: true,
        statusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "PlazaVehiculo5",
        isOccupied: true,
        statusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ParkingSpots", null, {});
  },
};
