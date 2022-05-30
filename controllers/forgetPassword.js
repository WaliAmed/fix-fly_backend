var nodemailer = require("nodemailer");
var bcrypt = require("bcryptjs");
const models = require("../models");

//http://localhost:2000/send/email
exports.sendemail = async (req, res) => {
  var { email, user_type } = req.body;

  if (user_type > 2 || user_type < 1)
    return res.status(500).json({ message: "Invalid user type!" });
  else if (user_type == 1) {
    var alreadyExistsUser = await models.User.findOne({
      where: { email },
    }).catch((err) => {
      console.log("Error: ", err);
    });
  } else if (user_type == 2) {
    var alreadyExistsUser = await models.Mechanic.findOne({
      where: { email },
    }).catch((err) => {
      console.log("Error: ", err);
    });
  }

  if (alreadyExistsUser) {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "fix.fly300@gmail.com",
        pass: "Fix@0786",
      },
    });

    const val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);

    var mailOptions = {
      from: "fix.fly300@gmail.com",
      to: email,
      subject: "FIX AND FLY (Password Reset)",
      text: `Your code is ${val}`,
      // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ success: false, message: "Email didn't get sent!" });
      } else {
        try {
          if (user_type == 1) {
            const result = models.User.update(
              { forget_password_code: val },
              { where: { email: email } }
            );
            console.log("Saving Code -> " + result);
          }
          if (user_type == 2) {
            const result = models.Mechanic.update(
              { forget_password_code: val },
              { where: { email: email } }
            );
            console.log("Saving Code -> " + result);
          }
        } catch (err) {
          return res.status(500).json({ message: "ERROR in saving code!" });
        }

        console.log("Email sent: " + info.response);
      }
    });

    return res.status(409).json({
      success: true,
      message:
        user_type == 1
          ? "User " + "with email exists! Done Sending email"
          : "Mechanic " + "with email exists! Done Sending email",
      reset_password_code: val,
    });
  } else {
    return res
      .status(409)
      .json({ message: "User with email does not exists !" });
  }
};

exports.checkResetCode = async (req, res) => {
  var { email, user_type, code } = req.body;

  if (user_type > 2 || user_type < 1) {
    return res.status(500).json({ message: "Invalid user type!" });
  } else if (user_type == 1) {
    await models.User.findOne({
      where: { email },
    })
      .then((user) => {
        if (user.forget_password_code === code) {
          models.User.update(
            { forget_password_code: null },
            { where: { forget_password_code: code } }
          );
          return res
            .status(200)
            .json({ success: true, message: "Code matched!" });
        } else
          return res
            .status(400)
            .json({ success: false, message: "Code didn't matched!" });
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  } else if (user_type == 2) {
    await models.Mechanic.findOne({
      where: { email },
    })
      .then((mechanic) => {
        if (mechanic.forget_password_code === code) {
          models.Mechanic.update(
            { forget_password_code: null },
            { where: { forget_password_code: code } }
          );
          return res
            .status(200)
            .json({ success: true, message: "Code matched!" });
        } else
          return res
            .status(400)
            .json({ success: false, message: "Code didn't matched!" });
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }
};

exports.resetPassword = async (req, res) => {
  var { email, user_type, password, confirm_password } = req.body;

  var salt = bcrypt.genSaltSync(10);
  var hash_password = bcrypt.hashSync(password, salt);
  var hash_confirm_password = bcrypt.hashSync(confirm_password, salt);

  try {
    if (user_type > 2 || user_type < 1) {
      return res.status(500).json({ message: "Invalid user type!" });
    } else if (user_type == 1) {
      await models.User.update(
        { password: hash_password, confirm_password: hash_confirm_password },
        { where: { email: email } }
      )
        .then((result) => {
          return res.status(200).json({
            success: true,
            message: "Password reset successfully!",
          });
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    } else if (user_type == 2) {
      await models.Mechanic.update(
        { password: hash_password, confirm_password: hash_confirm_password },
        { where: { email: email } }
      )
        .then((result) => {
          return res.status(200).json({
            success: true,
            message: "Password reset successfully!",
          });
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    }
  } catch {
    return res
      .status(500)
      .json({ success: false, message: "Password reset failed!" });
  }
};
