"use strict";
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    Admin_name: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  Admin.associate = function (models) {};

  return Admin;
};
