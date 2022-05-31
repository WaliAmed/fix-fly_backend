const userController = require("../controllers").user;
const userMiddleware = require("../middlewares").user;

const { body, validationResult } = require("express-validator");

let base = "/user";

module.exports = (app) => {
  app.post(
    base + "/signup",

    body("user_name", "Name should have more than 3 words.")
      .isString()
      .isLength({ min: 3 }),

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
        userController.signUp(req, res);
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
        userController.login(req, res);
      }
    }
  );

  app.post(base + "/location", (req, res) => {
    const user_location = userController.location(req, res);
    return user_location;
  });
};
