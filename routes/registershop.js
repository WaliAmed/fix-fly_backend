const shopController = require("../controllers").registershop;
const { body, validationResult } = require("express-validator");
let base = "/shop";

module.exports = (app) => {
  app.post(base + "/register", (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      shopController.shop(req, res);
    }
  });

  app.get(base + "/getallshops", (req, res) => {
    shopController.getallshops(req, res);
  });
};
