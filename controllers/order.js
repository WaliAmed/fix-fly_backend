const models = require("../models");
var bcrypt = require("bcryptjs");
var crypto = require("crypto");

//http://localhost:2000/user/signup
exports.Hireme = async (req, res) => {
  var code = crypto.randomBytes(20).toString("hex");
  console.log(req.body);
  var data = {
    code,
    ...req.body,
  };
  return models.Orders.create(data)
    .then((user) => res.status(201).send({ success: true, data: data }))
    .catch((error) => {
      res.status(400).send(() => {
        throw new Error(error);
      });
    });
};
