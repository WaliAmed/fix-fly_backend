const forgetPasswordController = require("../controllers").forgetPassword;
const { body, validationResult } = require("express-validator");
let base = "/forgetpassword";

module.exports = (app) => {
  app.post(
    base + "/send/email",

    body("email").isEmail(),

    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } else {
        forgetPasswordController.sendemail(req, res);
      }
    }
  );

  app.post(
    base + "/checkcode",

    body("email").isEmail(),

    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } else {
        forgetPasswordController.checkResetCode(req, res);
      }
    }
  );

  app.post(
    base + "/resetpassword",

    body("email").isEmail(),
    body("password").isString(),
    body("confirm_password")
      .isString()
      .trim()
      .isLength({ min: 4, max: 16 })
      .withMessage("Password must be between 4 to 16 characters")
      .custom(async (confirmPassword, { req }) => {
        const password = req.body.password;
        if (password !== confirmPassword) {
          throw new Error("Passwords must be same");
        }
      }),

    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } else {
        forgetPasswordController.resetPassword(req, res);
      }
    }
  );
};
