module.exports = (app) => {
  app.get("/", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Fix and Fly Server!",
    })
  );

  require("./user")(app);
  require("./mechanic")(app);
  require("./admin")(app);
  require("./forgetPassword")(app);
  // Setup a default catch-all route that sends back a welcome message in JSON format.

  app.route("*").all((req, res) => {
    res.status(200).send({
      message: "Welcome to the beginning of nothingness.",
      url: req.path,
    });
  });
};
