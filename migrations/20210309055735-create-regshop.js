"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Registershops", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      wash: {
        type: Sequelize.BOOLEAN,
      },
      interior_clean: {
        type: Sequelize.BOOLEAN,
      },
      polishing: {
        type: Sequelize.BOOLEAN,
      },
      engine_wash: {
        type: Sequelize.BOOLEAN,
      },
      car_spray: {
        type: Sequelize.BOOLEAN,
      },
      carpet_clean: {
        type: Sequelize.BOOLEAN,
      },
      image: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Registershops");
  },
};
