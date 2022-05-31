const models = require("../models");
var bcrypt = require("bcryptjs");
var crypto = require("crypto");

//http://localhost:2000/mechanic/signup
exports.signUp = async (req, res) => {
  let reqdata = ({} = req.body);

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(reqdata.password, salt);
  var hash2 = bcrypt.hashSync(reqdata.confirm_password, salt);

  reqdata.password = hash;
  reqdata.confirm_password = hash2;

  var email = reqdata.email;
  var code = crypto.randomBytes(20).toString("hex");
  let data = { code, ...reqdata, user_type: "2" };

  const alreadyExistsUser = await models.Mechanic.findOne({
    where: { email },
  }).catch((err) => {
    console.log("Error: ", err);
  });

  if (alreadyExistsUser) {
    return res
      .status(409)
      .json({ message: "Mechanic with this email already exists!" });
  }

  return models.Mechanic.create(data)
    .then((user) => res.status(201).send({ success: true, data: user }))
    .catch((error) => {
      res.status(400).send(() => {
        throw new Error(error);
      });
    });
};

//http://localhost:2000/mechanic/login
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  const userWithEmail = await models.Mechanic.findOne({ where: { email } });

  if (!userWithEmail)
    return res.status(400).json({ message: "Email does not exist." });

  bcrypt.compare(password, userWithEmail.password, function (err, result) {
    if (result === false)
      return res.status(400).json({ message: "Incorrect Password" });
    else res.status(201).send({ success: true, data: userWithEmail });
  });
};

//Save Location
// email, location
exports.location = async (req, res, next) => {
  const { email, location } = req.body;
  console.log(email);
  var loc= JSON.stringify(location);
  console.log(loc);
  const userWithEmail = await models.Mechanic.findOne({ where: { email } });
  console.log(userWithEmail);
  if (userWithEmail) {
    const user_update = await models.Mechanic.update(
      { location: loc },
      { where: { email: email } }
    );
    
    return res.status(400).json({ message: "updated location" });
  }

  return res.status(201).json({ message: "no updated location" });
};
