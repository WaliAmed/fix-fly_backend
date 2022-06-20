"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    code: DataTypes.STRING,
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    confirm_password: DataTypes.STRING,
    forget_password_code: DataTypes.STRING,
    user_type: DataTypes.STRING,
    location: DataTypes.STRING,
  });
  User.associate = function (models) {};

  return User;
};
