var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/welcome.html"));
  });

  //loads newEntry page
  app.get("/newEntry", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newEntry.html"));
  });

  //this is here for test, it does not currently pull DB info
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  // Load example page and pass in an example by id
  app.get("/measurements/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.sendFile(path.join(__dirname, "../public/view.html"));
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
