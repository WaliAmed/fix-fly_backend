"use strict";
module.exports = (sequelize, DataTypes) => {
  const Mechanic = sequelize.define("Mechanic", {
    code: DataTypes.STRING,
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    specialist: DataTypes.STRING,
    password: DataTypes.STRING,
    confirm_password: DataTypes.STRING,
    forget_password_code: DataTypes.STRING,
    user_type: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: "pending",
      allowNull: false,
    },
    location: DataTypes.STRING,
  });
  Mechanic.associate = function (models) {};

  return Mechanic;
};
