const models = require("../models");
var bcrypt = require("bcryptjs");
var crypto = require("crypto");

//http://localhost:2000/user/signup
exports.signUp = async (req, res) => {
  let reqdata = ({} = req.body);
  let data = { ...reqdata };
  console.log(data);
  return models.Registershop.create(data)
    .then((user) => res.status(201).send({ success: true, data: user }))
    .catch((error) => {
      res.status(400).send(() => {
        throw new Error(error);
      });
    });
};
