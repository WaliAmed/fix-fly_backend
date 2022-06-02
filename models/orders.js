"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init(
    {
      code: DataTypes.STRING,
      user_code: DataTypes.STRING,
      mechanic_code: DataTypes.STRING,
      order_name: DataTypes.STRING,
      order_date: DataTypes.STRING,
      order_time: DataTypes.STRING,
      order_status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
