"use strict";

const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Registershops = sequelize.define("Registershops", {
    title: DataTypes.STRING,
    wash: DataTypes.BOOLEAN,
    interior_clean: DataTypes.BOOLEAN,
    polishing: DataTypes.BOOLEAN,
    engine_wash: DataTypes.BOOLEAN,
    car_spray: DataTypes.BOOLEAN,
    carpet_clean: DataTypes.BOOLEAN,
    location: DataTypes.STRING,
    address: DataTypes.STRING
  });
  Registershops.associate = function (models) {};

  return Registershops;
};
