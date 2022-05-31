"use strict";

const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Registershop = sequelize.define("Registershop", {
    title: DataTypes.STRING,
    services: {
      type: DataTypes.STRING,
      serv: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      serv2: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    image: DataTypes.STRING,
    location: DataTypes.STRING,
    address: DataTypes.STRING
  });
  Registershop.associate = function (models) {};

  return Registershop;
};
