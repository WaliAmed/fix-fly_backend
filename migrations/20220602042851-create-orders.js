"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.STRING,
      },
      user_code: {
        type: Sequelize.STRING,
      },
      user_location: {
        type: Sequelize.STRING,
      },
      user_phone: {
        type: Sequelize.STRING,
      },
      mechanic_code: {
        type: Sequelize.STRING,
      },
      mechanic_phone: {
        type: Sequelize.STRING,
      },
      order_name: {
        type: Sequelize.STRING,
      },
      order_date: {
        type: Sequelize.STRING,
      },
      order_time: {
        type: Sequelize.STRING,
      },
      order_status: {
        type: Sequelize.STRING,
      },
      order_amount: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Orders");
  },
};
