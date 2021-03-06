"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Registershops", [
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
        wash: false,
        interior_clean: false,
        polishing: true,
        engine_wash: true,
        car_spray: true,
        carpet_clean: false,
        location: "1233,133445",
        address: "arid pmas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Shop4",
        wash: false,
        interior_clean: false,
        polishing: true,
        engine_wash: true,
        car_spray: true,
        carpet_clean: false,
        location: "1233,133445",
        address: "arid pmas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Shop5",
        wash: false,
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
        carpet_clean: true,
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
