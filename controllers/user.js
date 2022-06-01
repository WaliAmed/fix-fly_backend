const models = require("../models");
var bcrypt = require("bcryptjs");
var crypto = require("crypto");

//http://localhost:2000/user/signup
exports.signUp = async (req, res) => {
  let reqdata = ({} = req.body);

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(reqdata.password, salt);
  var hash2 = bcrypt.hashSync(reqdata.confirm_password, salt);

  reqdata.password = hash;
  reqdata.confirm_password = hash2;
  var email = reqdata.email;
  var code = crypto.randomBytes(20).toString("hex");
  let data = { code, ...reqdata, user_type: "1" };

  const alreadyExistsUser = await models.User.findOne({
    where: { email },
  }).catch((err) => {
    console.log("Error: ", err);
  });

  if (alreadyExistsUser) {
    return res
      .status(409)
      .json({ success: false, message: "Email already exists!" });
  }

  return models.User.create(data)
    .then((user) => res.status(201).send({ success: true, data: user }))
    .catch((error) => {
      res.status(400).send(() => {
        throw new Error(error);
      });
    });
};

//http://localhost:2000/user/login
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  const userWithEmail = await models.User.findOne({ where: { email } });

  if (!userWithEmail)
    return res
      .status(400)
      .json({ success: false, message: "Email does not exist." });

  bcrypt.compare(password, userWithEmail.password, function (err, result) {
    if (result === false)
      return res
        .status(400)
        .json({ Success: false, message: "Incorrect Password" });
    else res.status(201).send({ success: true, data: userWithEmail });
  });
};

//Save Location
// email, location
exports.location = async (req, res, next) => {
  const { email, location } = req.body;
  const userWithEmail = await models.User.findOne({ where: { email } });

  if (userWithEmail) {
    console.log(email, location, " <------------------------------");
    await models.User.update(
      { location: JSON.stringify(location) },
      { where: { email: email } }
    )
      .then((result) =>
        res.status(201).send({ message: "Location Updated!", user: result })
      )
      .catch((err) =>
        res.status(400).send({ message: "Location Updated Error!" })
      );
  }
};
