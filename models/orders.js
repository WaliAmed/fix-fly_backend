"use strict";
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define("Orders", {
    code: DataTypes.STRING,
    user_code: DataTypes.STRING,
    mechanic_code: DataTypes.STRING,
    order_name: DataTypes.STRING,
    order_date: DataTypes.STRING,
    order_time: DataTypes.STRING,
    order_status: DataTypes.STRING,
  });
  Orders.associate = function (models) {};

  return Orders;
};
