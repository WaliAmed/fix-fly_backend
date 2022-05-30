const adminController = require("../controllers").admin;
//const User= require('./../models/user.js');
const { body, validationResult } = require("express-validator");

let base = "/admin";

module.exports = (app) => {
  app.post(
    base + "/login",
    body("password").isString(),

    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } else {
        adminController.login(req, res);
      }
    }
  );

  app.get(base + "/getall/mechanic", (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      adminController.getAllMechanic(req, res);
    }
  });

  app.get(base + "/getall/users", (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      adminController.getAllUsers(req, res);
    }
  });

  app.delete(base + "/deletemechanic/:id", (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      adminController.Deletemechanic(req, res);
    }
  });

  app.delete(base + "/deleteuser/:id", (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      adminController.Deletuser(req, res);
    }
  });

  app.patch(base + "/updatemechanic/:id", (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      adminController.updatemechanic(req, res);
    }
  });

  app.patch(base + "/statuscancel/:id", (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      adminController.updatestatus(req, res);
    }
  });

  app.patch(base + "/statusapproved/:id", (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      adminController.updatestatusb(req, res);
    }
  });

  app.get(base + "/getaprovedmechanic", (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      adminController.getAproveMechanic(req, res);
    }
  });

  app.get(base + "/getpendingmechanic", (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      adminController.getPendingMechanic(req, res);
    }
  });
};
