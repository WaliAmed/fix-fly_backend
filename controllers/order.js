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

exports.getOrderbyId = async (req, res) => {
  console.log("req.body.user_code ------------> ", req.body.user_code);
  const getOrders = await models.Orders.findAll({
    where: { user_code: req.body.user_code },
  });

  if (!getOrders)
    return res.status(400).send({ success: false, message: "No Orders!" });
  else return res.status(201).send({ success: true, data: getOrders });
};

exports.getOrderbyIdM = async (req, res) => {
  console.log("req.body.user_code ------------> ", req.body.user_code);
  const getOrders = await models.Orders.findAll({
    where: { mechanic_code: req.body.user_code },
  });

  if (!getOrders)
    return res.status(400).send({ success: false, message: "No Orders!" });
  else return res.status(201).send({ success: true, data: getOrders });
};

exports.makeCharges = async (req, res) => {
  console.log(req.body);
  await models.Orders.update(req.body, { where: { code: req.body.code } });
  res.status(201).send("success");
};
