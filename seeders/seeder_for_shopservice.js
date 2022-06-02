"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Registershop", [
      {
        title: "Shop1",
        wash: true,
        interior_clean: false,
        polishing: true,
        engine_wash: false,
        car_spray: true,
        carpet_clean: false,
        location: "1233,133445",
        address: "arid pmas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Shop2",
        wash: true,
        interior_clean: false,
        polishing: true,
        engine_wash: false,
        car_spray: true,
        carpet_clean: false,
        location: "1233,133445",
        address: "arid pmas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Shop3",
        wash: true,
        interior_clean: false,
        polishing: true,
        engine_wash: false,
        car_spray: true,
        carpet_clean: false,
        location: "1233,133445",
        address: "arid pmas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Shop4",
        wash: true,
        interior_clean: false,
        polishing: true,
        engine_wash: false,
        car_spray: true,
        carpet_clean: false,
        location: "1233,133445",
        address: "arid pmas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Shop5",
        wash: true,
        interior_clean: false,
        polishing: true,
        engine_wash: false,
        car_spray: true,
        carpet_clean: false,
        location: "1233,133445",
        address: "arid pmas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Shop6",
        wash: true,
        interior_clean: false,
        polishing: true,
        engine_wash: false,
        car_spray: true,
        carpet_clean: false,
        location: "1233,133445",
        address: "arid pmas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
