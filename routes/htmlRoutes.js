var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/welcome.html"));
  });

  //loads newEntry page
  app.get("/measurements", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/measurements.html"));
  });

  //this is here for test, it does not currently pull DB info
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  // Load graph page for whatever username
  app.get("/measurements/:name", function(req, res) {
    db.Measurements.findAll({ where: { name: req.params.name } }).then(function(dbMeasurements) {
      res.sendFile(path.join(__dirname, "../public/view.html"));
    });
  });

  // unmatched routed direct you to home page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/welcome.html"));
  });
};
