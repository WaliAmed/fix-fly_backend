const models = require("../models");
var bcrypt = require("bcryptjs");
var crypto = require("crypto");
const { count } = require("console");

//http://localhost:2000/admin/login
exports.login = async (req, res, next) => {
  const { Admin_name, password } = req.body;
  const admin_data = await models.Admin.findOne({ where: { Admin_name } });

  if (!admin_data)
    return res.status(400).json({ message: "name does not match!" });

  if (admin_data.password !== password)
    return res.status(400).json({ message: " password does not match!" });
  else res.status(201).send(admin_data);
};

//get all user api
exports.getAllUsers = async (req, res, next) => {
  const user_data = await models.User.findAll({ raw: true });

  if (!user_data) return res.status(400).json({ message: "no record" });
  else res.status(201).send(user_data);
};

//get all mechanic
exports.getAllMechanic = async (req, res, next) => {
  const mechanic_data = await models.Mechanic.findAll({ raw: true });

  if (!mechanic_data) return res.status(400).json({ message: "no record" });
  else res.status(201).send(mechanic_data);
};



//Delete mechanic
exports.Deletemechanic = async (req, res, next) => {
  const mechanic_data = await models.Mechanic.destroy({
    where: { id: req.params.id },
  });
  if (!mechanic_data) return res.status(400).json({ message: "no record" });
  else res.status(201).send("success" + req.params.id);
};

//Delete user
exports.Deletuser = async (req, res, next) => {
  const user_data = await models.User.destroy({ where: { id: req.params.id } });
  if (user_data) return res.status(400).json({ message: "no record" });
  else res.status(201).send("success" + req.params.id);
};

//update user
exports.updatemechanic = async (req, res, next) => {
  const id = req.params.id;
  await models.Mechanic.update(req.body, { where: { id: id } });
  res.status(201).send("success" + id);
};

//update status cancel
exports.updatestatus = async (req, res, next) => {
  const id = req.params.id;
  await models.Mechanic.update({ status: "cancel" }, { where: { id: id } });
  res.status(201).send("success" + id);
};

//update status approved
exports.updatestatusb = async (req, res, next) => {
  const id = req.params.id;
  console.log("------------------------------------------> ", id);
  await models.Mechanic.update({ status: "approved" }, { where: { id: id } });
  res.status(201).send("success" + id);
};

// //get all approved mechanic
exports.getAproveMechanic = async (req, res, next) => {
  const mechanic_data = await models.Mechanic.findAll({
    where: { status: "approved" },
  });

  if (!mechanic_data) return res.status(400).json({ message: "no record" });
  else res.status(201).send(mechanic_data);
};

// //get all pending mechanic
exports.getPendingMechanic = async (req, res, next) => {
  const mechanic_data = await models.Mechanic.findAll({
    where: { status: "pending" },
  });
  if (!mechanic_data) return res.status(400).json({ message: "no record" });
  else {res.status(201).send(mechanic_data);}
  
};

//get all records
exports.getallrecords = async (req, res, next) => {
  const records_data = await models.Orders.findAll({ raw: true });

  if (!records_data) return res.status(400).json({ message: "no record" });
  else res.status(201).send(records_data);
  
};

//get stats pending&approved mechanic
exports.stats = async (req, res, next) => {
  const mechanic_pending = await models.Mechanic.findAll({
    where: { status: "pending" },
  });

  const mechanic_approved = await models.Mechanic.findAll({
    where: { status: "approved" },
  });

  var a=(mechanic_pending.length)
  var b=(mechanic_approved.length)
   console.log(a+b)
res.status(201).send(a+" "+b);  
};
