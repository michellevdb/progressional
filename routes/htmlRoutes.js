var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  app.get("/newEntry", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newEntry.html"));
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
