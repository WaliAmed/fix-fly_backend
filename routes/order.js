const orderController = require("../controllers").order;
const userMiddleware = require("../middlewares").user;

const { body, validationResult } = require("express-validator");

module.exports = (app) => {
  app.post("/hireme", (req, res) => {
    orderController.Hireme(req, res);
  });

  app.post("/getorderbyid", (req, res) => {
    orderController.getOrderbyId(req, res);
  });
};
