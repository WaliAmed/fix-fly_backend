const mechanicController = require("../controllers").mechanic;

const { body, validationResult } = require("express-validator");

let base = "/mechanic";

module.exports = (app) => {
  app.post(
    base + "/signup",

    body("user_name", "min words 3").isString().isLength({ min: 3 }),

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
        mechanicController.signUp(req, res);
      }
    }
  );

  app.post(
    base + "/login",

    body("email").isEmail(),
    body("password").isString(),

    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } else {
        mechanicController.login(req, res);
      }
    }
  );

  app.patch(base + "/location", (req, res) => {
    const mechanic_location = mechanicController.location(req, res);
    return mechanic_location;
  });

  app.get(base + "/getall", (req, res) => {
    return adminController.getAllMechanic(req, res);
  });
};
