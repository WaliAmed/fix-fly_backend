const shopController = require("../controllers").registershop;
//const User= require('./../models/user.js');
const { body, validationResult } = require("express-validator");

let base = "/shop";

module.exports = (app) => {
  
  app.post(
    base + "/register",
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } else {
        shopController.signUp(req, res);
      }
    }
  );
};
